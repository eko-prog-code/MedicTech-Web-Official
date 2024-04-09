import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Table,
  Button,
  Spinner,
  InputGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import { connect } from "react-redux";
import { getListSaraf, searchListSaraf } from "actions/SarafAction";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import HeroAkredbg from "../../images/HeroAkredBg.png";
import './categori.css';

class ListSaraf extends Component {
  componentDidMount() {
    this.props.dispatch(getListSaraf());
  }

  handleSearch = (e) => {
    this.props.dispatch(searchListSaraf(e.target.value));
  };

  render() {
    const { getListSarafError, getListSarafLoading, getListSarafResult } =
      this.props;
    return (
      <div className="content">
        <Card>
          <Row className="px-4 align-items-center justify-content-between">
            <CardHeader>
              <CardTitle tag="h4">Dokter Spesialis Saraf</CardTitle>
            </CardHeader>
            <form className="mt-4">
              <InputGroup className="no-border">
                <Input onChange={this.handleSearch} placeholder="Kata Kunci" />
                <InputGroupAddon addonType="append">
                  <InputGroupText>
                    <i className="nc-icon nc-zoom-split" />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </form>
          </Row>

          <Table responsive>
            <thead className="text-primary">
              <tr></tr>
            </thead>

            <tbody>
              {getListSarafResult ? (
                Object.keys(getListSarafResult).map((key) => (
                  <tr key={key}>
                    <td>
                      <tr class="bg-primary text-white">
                        <img
                            src={getListSarafResult[key].image}
                            width="100"
                            alt={getListSarafResult[key].title}
                          />
                        <td>{getListSarafResult[key].senin}</td>
                        <td>{getListSarafResult[key].selasa}</td>
                        <td>{getListSarafResult[key].rabu}</td>
                        <td>{getListSarafResult[key].kamis}</td>
                        <td>{getListSarafResult[key].jumat}</td>
                        <td>{getListSarafResult[key].sabtu}</td>
                      </tr>
                      <tr>
                        <th scope="row">
                        {getListSarafResult[key].title}
                        </th>
                      </tr>
                      <tr></tr>
                    </td>
                  </tr>
                ))
              ) : getListSarafLoading ? (
                <tr>
                  <td colSpan="3" align="center">
                    <Spinner color="primary" />
                  </td>
                </tr>
              ) : getListSarafError ? (
                <tr>
                  <td colSpan="3" align="center">
                    {getListSarafError}
                  </td>
                </tr>
              ) : (
                <tr>
                  <td colSpan="3" align="center">
                    Data Kosong
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getListSarafLoading: state.SarafReducer.getListSarafLoading,
  getListSarafResult: state.SarafReducer.getListSarafResult,
  getListSarafError: state.SarafReducer.getListSarafError,

  deleteSarafLoading: state.SarafReducer.deleteSarafLoading,
  deleteSarafResult: state.SarafReducer.deleteSarafResult,
  deleteSarafError: state.SarafReducer.deleteSarafError,
});

export default connect(mapStateToProps, null)(ListSaraf);
