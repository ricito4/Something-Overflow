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
  render(){
    return (
      <div>
        <h1> SOMETHING OVERFLOW, but what is something? </h1>
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
