import React from 'react'
import './Searchbar.css'
import SearchIcon from '@material-ui/icons/Search';
class Searchbar extends React.Component{
    state={
        text:'sun'
    }
    handleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    componentDidMount(){
        this.props.onSearchSubmit(this.state.text)
        this.setState({text:''})
    }

    onFormSubmit=(event)=>{
        event.preventDefault()
        this.props.onSearchSubmit(this.state.text)
        this.setState({text:''})
    }
    render(){
        return (
            <form onSubmit={this.onFormSubmit} className="searchbar">
                <h2>Image Gallery</h2>
                <div className="searchbar__input">
                    <input type="text" name="text" value={this.state.text} placeholder="Search Images" onChange={this.handleChange}/>
                    <div onClick={this.onFormSubmit} className="searchbar__icon">
                    <SearchIcon className="searchbar__icon"/>
                    </div>
                </div>
            </form>
        )
    }
}

export default Searchbar