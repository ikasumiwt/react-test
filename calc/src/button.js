    var Calculator = React.createClass({
      getInitialState: function () {
        return {
          num : 0
        };
      },

      incrementNum: function() {
        var _num = this.state.num;
        this.setState({num: _num + 1})
      },

      render: function () {
        return (
          <div clickEvent='incrementNum'>
            parent compornent : {this.state.num}
            <childButton>
          </div>
        );
      }
    });

    var ChildButton = React.createClass({
      
      _clickEvent: function(){
        this.props.clickEvent();
      },

      render: function() {
        return (
          <input type='button' value='add' onClick={addButtonClick}>
              
            </input>
          </div>
        );
      }
    });
    React.render(
        <Calculator />,
        document.getElementById('content')
    );

