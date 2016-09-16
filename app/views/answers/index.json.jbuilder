json.array! @answers do |answer|

      json.text answer.text
      json.id answer.id
      json.best answer.best
      json.question answer.question
      json.user answer.user

end
