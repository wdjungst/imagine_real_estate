import React from 'react'
import favicon from '../favicon.ico'

const { arrayOf, string, node, object } = React.PropTypes

const shims = `
  (String.prototype.trim && Function.prototype.bind) || document.write('<script src="/es5-shim.js"><\\/script>');
  window.Promise || document.write('<script src="/Promise.js"><\\/script>');
  window.fetch || document.write('<script src="/fetch.js"><\\/script>');
`

const Document = React.createClass({

  propTypes: {
    styles: arrayOf(node),
    scripts: arrayOf(node),
    content: string,
    title: string,
    initialState: object
  },

  render() {
    const { styles, scripts, content, title } = this.props

    return (
      <html>
        <head>
          <meta charSet="utf-8"/>
          <link rel="shortcut icon" href={favicon}/>
          <title>{title}</title>
          <link href="https://fonts.googleapis.com/css?family=Lato:300" rel="stylesheet" type="text/css" />
          <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
          <link rel="stylesheet" href="/Materialize/dist/css/materialize.min.css" />
          <link rel="stylesheet" href="/style.css" />
          {styles}
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{ __html: content }}/>
          <script dangerouslySetInnerHTML={{ __html: shims }}/>
          <script type="text/javascript" src="/jquery/dist/jquery.min.js" />
          <script type="text/javascript" src="/Materialize/dist/js/materialize.min.js" />
          {scripts}
        </body>
      </html>
    )
  }

})

export default Document
