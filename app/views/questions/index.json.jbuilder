json.array! @questions do |question|

      json.title question.title
      json.text question.text
      json.id question.id
      json.author question.user

end
