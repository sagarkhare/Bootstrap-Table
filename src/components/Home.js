import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button, Modal, Input } from "react-bootstrap";
import Data from './Data';
import verticalDots from '../styles/images/three-dots-vertical.svg'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {Link, useNavigate} from 'react-router-dom';

function Home() {
  let navigate = useNavigate();

  const handleDelete = (id) => {
    var index = Data.map(function(e){
      return e.id
    }).indexOf(id);
    Data.splice(index,1);
    navigate('/');
  };
  const abc = () =>{
    console.log("clicked");
  }
  return (
    <div class="container ">
      <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
        <div class="row ">
          {/* <div class="col-sm-3 mt-5 mb-4 text-gred">
            <div className="search">
              <form class="form-inline">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search Student"
                  aria-label="Search"
                />
              </form>
            </div>
          </div> */}
          <div
            class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred"
            style={{ color: "green" }}
          >
            <h2>
              <b>Bootstrap Table</b>
            </h2>
          </div>
          <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
            <Button variant="primary" onClick={() => navigate("addRecord")}>
              Add New
            </Button>
          </div>
        </div>
        <div class="row">
          <div class="table-responsive ">
            <table class="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Contact</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {Data.map((row) => {
                  return(
                    <tr>
                    <td>{row.Name}</td>
                    <td>{row.Age}</td>
                    <td>{row.Contact}</td>
                    <td>{row.Email}</td>
                    {/* <td><Button><img src={verticalDots} /></Button></td> */}
                    <td>
                    <DropdownButton id="dropdown-basic-button" title="">
                    <Dropdown.Item href="" onClick={() => handleDelete(row.id)}>Delete</Dropdown.Item>
                    <Dropdown.Item href="">Edit</Dropdown.Item>
                    <Dropdown.Item href="">Action3</Dropdown.Item>
                    </DropdownButton>
                    </td>
                  </tr>
                  );
                })
              }
                {/* <tr>
                  <td>abc</td>
                  <td>abc@gmail.com</td>
                  <td>676767676</td>
                  <td>Germany</td>
                  <td>
                    <a
                      href="#"
                      class="view"
                      title="View"
                      data-toggle="tooltip"
                      style={{ color: "#10ab80" }}
                    >
                      <i class="material-icons">&#xE417;</i>
                    </a>
                    <a href="#" class="edit" title="Edit" data-toggle="tooltip">
                      <i class="material-icons">&#xE254;</i>
                    </a>
                    <a
                      href="#"
                      class="delete"
                      title="Delete"
                      data-toggle="tooltip"
                      style={{ color: "red" }}
                    >
                      <i class="material-icons">&#xE872;</i>
                    </a>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>

        </div>
      </div>
  );
}

export default Home;
