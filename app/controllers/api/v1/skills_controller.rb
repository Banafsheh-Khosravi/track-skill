class Api::V1::SkillsController < ApplicationController
  def create
    skill = Skill.new(skill_params)

    if skill.save
      render json: { message: 'Skill created!'}
    else
      render json: { message: 'Validation failed', errors: skill.errors}
    end
  end

  private

  def skill_params
    params.require(:skill).permit(:desc, :name)
  end
end

