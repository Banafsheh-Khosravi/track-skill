class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: Devise::JWT::RevocationStrategies::Null

  enum role: %i[employee admin]

  after_initialize :set_default_role, :set_password, if: :new_record?
  validates :email, uniqueness: { case_sensitive: false }

  def set_default_role
    self.role ||= :employee
  end

  def set_password
    @generated_password = Devise.friendly_token.first(8)
    self.password ||= @generated_password
  end
end