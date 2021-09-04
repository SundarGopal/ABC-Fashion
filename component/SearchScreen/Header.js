import { SearchBar } from 'react-native-elements';

import React,{setState} from 'react';

const Header =()=>{
  state = {
    search: '',
  };

  updateSearch = (search) => {
   setState({ search });
  };

  
    const { search } = state;

    return (
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  
}
export default Header;
