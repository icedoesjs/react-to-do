import { Component } from 'react';
import './App.css';
import AddTask from './components/AddTask/AddTask.component';
import ItemCard from './components/ItemCard/ItemCard.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

class App extends Component {
  constructor() {
    super()
    this.timeout = 0;
    this.state = {
      'items': [],
    }
  }

  addItem = (e) => {
    const item_name = e.target.value;
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      if (!item_name.length) return;
      if (this.state.items.includes(item_name)) return;
      this.setState(i => ({
        items: [...i.items, `${item_name}`]
      }))
    }, 500)
  }

  handleDeleteItem = (e) => {
    const item = e;
    this.setState({items: this.state.items.filter(function(i) {
      return i !== item
    })});
  }

  handleCheckItem = (e) => {
    const item = e;
    this.handleDeleteItem(item);
    this.setState(i => ({
      items: [...i.items, `${item}:checked`]
    }));
  }


  render() {
    return (
      <div className='App'>
        <div className='items-container'>
        <div className='header-text'>
        <h1 className='header'><FontAwesomeIcon className='header-icon' icon={faCheck}/> To-Do React App</h1>
        </div>
          <AddTask addItem={this.addItem}/>
          {
            this.state.items?.map((i) => {
              let props = {
                item: i,
                handleDelete: this.handleDeleteItem,
                handleCheck: this.handleCheckItem
              }
              return (
                <ItemCard key={i} {...props} />
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default App;
