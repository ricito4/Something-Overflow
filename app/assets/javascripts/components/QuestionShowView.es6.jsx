class QuestionShowView extends React.Component {
  constructor(){
    super()
    this.state = {
      answers: []
    }
  }

  componentDidMount(){
    link= `/questions/${JSON.parse(this.props.question)["id"]}/answers`
    $.ajax({
      method: 'get',
      url: link
    }).done(function(response){
      this.setState({
        answers: response
      })}.bind(this))
  }


  render(){
    let question= JSON.parse(this.props.question)
    return (
      <div>
        <h1> {question["title"]} </h1>
        <p> {question["text"]} </p>
        < AnswersView data={this.state.answers} />
      </div>
      )
  }
}

