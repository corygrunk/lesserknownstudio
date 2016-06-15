var Projects = React.createClass({
  getInitialState: function() {
    return {
      projects: []
    };
  },
  componentDidMount: function() {
    this.serverRequest = $.get(this.props.source, function (result) {
      var projectsArray = result;
      this.setState({
        projects: projectsArray
      });
    }.bind(this));
  },
  componentWillUnmount: function() {
    this.serverRequest.abort();
  },
  createThumbnail: function() {
    return (
      <div>
        {this.state.projects.map(function(project, i) {
          return (
            <div className="thumbnail" key={i}>
              <h3>{project.title}</h3>
              <img src={project.image.thumb} />
            </div>
          );
      })}
      </div>
    );
  },
  render: function() {
    return (
      <div>
        {this.createThumbnail()}
      </div>
    );
  }
});

ReactDOM.render(
  <Projects source="/projects.json" />,
  document.getElementById("container")
);
