class QuestionsView extends React.Component {
  constructor(){
    super()
    this.state = {
      questions: []
    }
  }

  componentDidMount(){
    link= "/questions.json"
    $.ajax({
      method: 'get',
      url: link
    }).done(function(response){
      this.setState({
        questions: response
      })
    }.bind(this))
  }
  newQuestion(question) {
    this.setState({
      questions: [question].concat(this.state.questions)
    })
  }


  render(){
    return (
      <div>
        <h1> SOMETHING OVERFLOW, but what is something? </h1>
        <QuestionNewView newQuestion={this.newQuestion.bind(this)}/>
        {
          this.state.questions.map((question,index) => {

            return (
              <Question key={index} data={question} />
            )
          })
        }
      </div>
      )
  }
}
