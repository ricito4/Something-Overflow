class AnswersView extends React.Component {
  render(){
    let answers= this.props.data

    return(
      <ul>
         {
          answers.map((answer,index) => {
            return (<AnswerView key={index} data={answer} />)
          })
        }
      </ul>
      )
  }
}
