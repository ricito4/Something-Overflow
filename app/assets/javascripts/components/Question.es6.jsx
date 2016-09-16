class Question extends React.Component {
  render(){
    var question= this.props.data;
    var showLink = "/questions/" + question.id
    return (
      <div>
        <span><a href={showLink}>{question.title}</a></span><br></br>
        <span>{question.text}</span><br></br>
        <span>{question.author.username}</span><br></br><br></br>
      </div>
      )
  }


}
