import React, {Component} from 'react'
import {Link} from 'react-router'


class Post extends Component {

  componentWillUpdate(nextProps, nextState) {
    console.log(nextProps)
  }

  render() {
    return (
      <div className="postsWrapper">
        {this.props.entries.map((entry, index) => (
          <div key={index} className="divMargin">
            <Link to={"view/" + index } className="postLink">
                <h1 className="postH titleFont">{entry.title}</h1>
                <h2 className="authorFont authorMargin">{entry.author}</h2>
            </Link>
          </div>
        ))}
      </div>
    )
  }
}

export default Post
