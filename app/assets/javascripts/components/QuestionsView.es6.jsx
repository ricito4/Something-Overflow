class QuestionsView extends React.Component {
  render(){
    let questions= JSON.parse(this.props.questions)
    return (
      <div>
        <h1> SOMETHING OVERFLOW, but what is something? </h1>
        {
          questions.map((question,index) => {
            return (<Question key={index} data={question} />)
          })
        }
      </div>
      )
  }
}
