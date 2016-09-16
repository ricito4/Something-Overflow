json.array! @questions do |question|

      json.title question.title
      json.text question.text
      json.id question.id
      json.user question.user

end
