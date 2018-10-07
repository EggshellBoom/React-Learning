import React, { Component } from 'react';
import { adduser, deleteuser, searchuser } from './Reducer'
import logo from './logo.svg';
import { connect } from 'react-redux'

import './App.css';

import sampledata from "./generated.json";

import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom'



// class Table extends Component {

//   render () {

//     const

//   }

// }



class SearchBar extends Component {

    render() {

        return (

            <div>

                <h1>Search</h1>

                <input value={this.props.searchTerm} onChange={this.props.changeHandler}></input>

            </div>

        );

    }

}



class Frontpage extends Component {

    render() {

        const { data, sortFlag, page, pagesize, } = this.props;

        var processedData = [...data];

        processedData.sort((a, b) => {

            if (sortFlag === 0)

                return a.firstname.localeCompare(b.firstname)

            else if (sortFlag === 1)

                return a.lastname.localeCompare(b.lastname)

            else if (sortFlag === 2)

                return a.gender.localeCompare(b.gender)

            else if (sortFlag === 3)

                return a.age - b.age;

            else

                return 0;

        }

        );



        const processedUser = processedData.map((col, i) => {

            if (i >= page * pagesize && i < (page + 1) * pagesize)

                return (

                    <tr>

                        <td> <button onClick={() => this.props.deleterow(col._id)} >delete</button> </td>

                        <td> <button onClick={() => this.props.editrow(col)} ><Link to="/EditUser" >edit</Link></button> </td>

                        <td onClick={() => this.props.changeSort(0)}>{col.firstname}</td>

                        <td onClick={() => this.props.changeSort(1)}>{col.lastname}</td>

                        <td onClick={() => this.props.changeSort(3)}>{col.age}</td>

                        <td onClick={() => this.props.changeSort(2)}>{col.gender}</td>

                    </tr>)
        })




        const header = (<tr>

            <th>Delete</th>

            <th>Edit</th>

            <th onClick={() => this.props.changeSort(0)}>Firstname</th>

            <th onClick={() => this.props.changeSort(1)}>Lastname</th>

            <th onClick={() => this.props.changeSort(3)}>Age</th>

            <th onClick={() => this.props.changeSort(2)}>Gender</th>

        </tr>

        )



        return (

            <div>

                <SearchBar

                    searchTerm={this.props.searchTerm}

                    changeHandler={this.props.changeHandler}

                />
                <br />
                <br />
            

                <table id = "users">

                    {header}

                    {processedUser}

                </table>

                <button ><Link to="/AddUser">Add User</Link></button>

                {page}/{Math.ceil(data.length / pagesize - 1)}

                <br />
                <br/>

                <button disabled={page === 0} onClick={this.props.changePageDown}>Prev Page</button>

                <button disabled={page > ((data.length / pagesize) - 1)} onClick={this.props.changePageUp}>Next Page</button>

                <select value={this.props.pagesize} onChange={this.props.changePageSize}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option></select>



            </div>

        );

    }

}



class UserChange extends Component {

    constructor(props) {

        super(props)

        this.state = {

            first: "",

            last: "",

            age: "",

            gender: ""

        }

    }



    changeHandler = e => {

        this.setState({ [e.target.name]: e.target.value })

    }



    adduser = () => {

        const { first, last, age, gender } = this.state;

        console.log(first && last && age && gender)

        if (!(first && last && age && gender)) {

            alert("information not complete!")

            return

        }

        const userinfo = {

            "_id": `${first}`,

            "age": `${age}`,

            "firstname": `${first}`,

            "lastname": `${last}`,

            "gender": `${gender}`
        }

        console.log(userinfo)

        this.setState({

            first: "",

            last: "",

            age: "",

            gender: ""

        })

        this.props.adduser(userinfo)

        this.props.history.push('/');

    }



    render() {

        const { data } = this.props;

        const { first, last, age, gender } = this.state;

        return (

            <div>

                <h1>Create New User</h1>

                <div className="userForm">

                    First name
            
        <input name="first" value={first} onChange={this.changeHandler}></input>

                    Last Name
            
        <input name="last" value={last} onChange={this.changeHandler}></input>

                    Age
            
        <input name="age" value={age} onChange={this.changeHandler}></input>

                    Gender
            
        <input name="gender" value={gender} onChange={this.changeHandler}></input>

                    <button onClick={this.adduser}>Add to DataBase</button>

                </div>

            </div>

        )

    }

}



class EditUser extends Component {

    constructor(props) {

        super(props)

        this.state = {

            first: props.first,

            last: props.last,

            age: props.age,

            gender: props.gender

        }

    }





    componentWillReceiveProps(nextProps) {

        this.setState({

            first: nextProps.first,

            last: nextProps.last,

            age: nextProps.age,

            gender: nextProps.gender

        })

    }



    changeHandler = e => {

        this.setState({ [e.target.name]: e.target.value })

    }



    adduser = () => {

        const { first, last, age, gender } = this.state;

        console.log(first && last && age && gender)

        if (!(first && last && age && gender)) {

            alert("information not complete!")

            return

        }

        const userinfo = {

            "_id": `${first}`,

            "age": `${age}`,

            "firstname": `${first}`,

            "lastname": `${last}`,

            "gender": `${gender}`
        }

        console.log(userinfo)

        this.setState({

            first: "",

            last: "",

            age: "",

            gender: ""

        })

        this.props.edituser(userinfo);

        this.props.history.push('/');

    }



    render() {

        const { data } = this.props;

        const { first, last, age, gender } = this.state;

        return (

            <div>

                <h1> Edit User</h1>

                <div className="userForm">

                    First name
            
        <input name="first" value={first} onChange={this.changeHandler}></input>

                    Last Name
            
        <input name="last" value={last} onChange={this.changeHandler}></input>

                    Age
            
        <input name="age" value={age} onChange={this.changeHandler}></input>

                    Gender
            
        <input name="gender" value={gender} onChange={this.changeHandler}></input>

                    <button onClick={this.adduser}>Add to DataBase</button>

                </div>

            </div>

        )

    }

}



class App extends Component {

    constructor(props) {

        super(props)

        this.state = {

            sortFlag: -1,

            deleteID: [],

            searchTerm: "",

            page: 0,

            pagesize: 5,

            first: "",

            last: "",

            age: "",

            gender: "",

            _id: ""

        }

    }



    adduser = (userData) => {
        this.props.adduser(userData)
   }



    edituser = (userData) => {

        this.deleterow(this.state._id)

        this.adduser(userData)

        this.setState({

            first: "",

            last: "",

            age: "",

            gender: "",

            _id: ""

        })



    }



    deleterow = (id) => {

        const newarray = this.props.data.data.filter(item => item._id !== id);

        const deletearray = this.props.data.deletedArray.filter(item => item._id !== id);

        this.props.deleteuser(newarray, deletearray)
    }



    editrow = (col) => {

        this.setState({

            first: col.firstname,

            last: col.lastname,

            age: col.age,

            gender: col.gender,

            _id: col._id

        })



    }



    changePageSize = e => {

        this.setState({ pagesize: e.target.value })

    }



    changeHandler = e => {

        this.setState({ searchTerm: e.target.value })

        const newarray = this.props.data.deletedArray.filter(item => {

            if (!e.target.value)

                return true

            else {

                if (item.firstname.toLowerCase().includes(e.target.value.toLowerCase()))

                    return true;

                if (item.lastname.toLowerCase().includes(e.target.value.toLowerCase()))

                    return true;

                if (item.gender.toLowerCase().includes(e.target.value.toLowerCase()))

                    return true;

            }

        });
        console.log("inside search")
        
        console.log(newarray)

        this.props.searchuser(newarray);
        this.setState({page: 0 })

    }

    changePageUp = () => {

        this.setState({ page: this.state.page + 1 })

    }

    changePageDown = () => {

        this.setState({ page: this.state.page - 1 })

    }



    changeSort = (value) => {

        this.setState({ sortFlag: value })

    }

    render() {
        const{data} = this.props;
        console.log(data.deletedArray)

        const {sortFlag, page, pagesize, searchTerm, first, last, age, gender } = this.state;

        return (

            <BrowserRouter>

                <div className="App">

                    <Switch>

                        <Route exact={true} path="/" render={() => <Frontpage

                            data={data.data}

                            page={page}

                            pagesize={pagesize}

                            searchTerm={searchTerm}

                            changeHandler={this.changeHandler}

                            changePageUp={this.changePageUp}

                            changePageDown={this.changePageDown}

                            changePageSize={this.changePageSize}

                            sortFlag={sortFlag}

                            changeSort={this.changeSort}

                            deleterow={this.deleterow}

                            adduser={this.adduser}

                            editrow={this.editrow}

                        />} />



                        <Route path="/AddUser" render={({ history }) => <UserChange

                            data={this.props.data.data}

                            adduser={this.adduser}

                            history={history}

                        />} />



                        <Route path="/EditUser" render={({ history }) => <EditUser

                            first={first}

                            last={last}

                            age={age}

                            gender={gender}

                            data={this.props.data.data}

                            edituser={this.edituser}

                            history={history}

                        />} />

                    </Switch>





                </div>

            </BrowserRouter>



        );

    }

}


// 4. define state->props, and dispatch->props mappings
const mapStateToProps = (data,deletedArray) => {
    return {
        data: data,
        deletedArray: deletedArray
        }
};

function mapDispatchToProps(dispatch) {
    return ({
        adduser: (d) => { dispatch(adduser(d)) },
        deleteuser: (d,p) => { dispatch(deleteuser(d,p)) },
        searchuser: (d) => { dispatch(searchuser(d)) },
    })
};

// 5. connect component to store with mappings
export default connect(mapStateToProps, mapDispatchToProps)(App);

