import React, {Component} from 'react';

class Partners extends Component {

  componentWillMount() {
    fetch('https://freetime-laboratoria.herokuapp.com/api/Accounts?access_token=YSfVKckQ68aaHfmMlfZplkNG5YbPaKTFsPFZ1kNtRkiZzfnBu8vPLFOCjRiYYTv1')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({
        allpart: data
      })})
  }


    render (){
      return (
        <div>


        </div>

      )
    }
};

export default Partners;
