import React, {Component} from 'react'

class Content extends Component {

  constructor(props) {
    super(props)
     console.log('inside content', this.props)
  }

  render() {

    var {entries} = this.props.route
    var {id} = this.props.params

    return (
      <div>
        <h1 className="titleFont titleMargin">{entries[id].title}</h1>
        <h2 className="authorFont authorMargin">{entries[id].author}</h2>
        <p>{entries[id].body}</p>
      </div>
    )
  }
}

export default Content
