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
import { getListJantung, searchListJantung } from "actions/JantungAction";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import HeroAkredbg from "../../images/HeroAkredBg.png";
import './categori.css';

class ListJantung extends Component {
  componentDidMount() {
    this.props.dispatch(getListJantung());
  }

  handleSearch = (e) => {
    this.props.dispatch(searchListJantung(e.target.value));
  };

  render() {
    const { getListJantungError, getListJantungLoading, getListJantungResult } =
      this.props;
    return (
      <div className="content">
        <Card>
          <Row className="px-4 align-items-center justify-content-between">
            <CardHeader>
              <CardTitle tag="h4">Dokter Spesialis Jantung</CardTitle>
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
              {getListJantungResult ? (
                Object.keys(getListJantungResult).map((key) => (
                  <tr key={key}>
                    <td>
                      <tr class="bg-primary text-white">
                        <img
                            src={getListJantungResult[key].image}
                            width="100"
                            alt={getListJantungResult[key].title}
                          />
                        <td>{getListJantungResult[key].senin}</td>
                        <td>{getListJantungResult[key].selasa}</td>
                        <td>{getListJantungResult[key].rabu}</td>
                        <td>{getListJantungResult[key].kamis}</td>
                        <td>{getListJantungResult[key].jumat}</td>
                        <td>{getListJantungResult[key].sabtu}</td>
                      </tr>
                      <tr>
                        <th scope="row">
                        {getListJantungResult[key].title}
                        </th>
                      </tr>
                      <tr></tr>
                    </td>
                  </tr>
                ))
              ) : getListJantungLoading ? (
                <tr>
                  <td colSpan="3" align="center">
                    <Spinner color="primary" />
                  </td>
                </tr>
              ) : getListJantungError ? (
                <tr>
                  <td colSpan="3" align="center">
                    {getListJantungError}
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
  getListJantungLoading: state.JantungReducer.getListJantungLoading,
  getListJantungResult: state.JantungReducer.getListJantungResult,
  getListJantungError: state.JantungReducer.getListJantungError,

  deleteJantungLoading: state.JantungReducer.deleteJantungLoading,
  deleteJantungResult: state.JantungReducer.deleteJantungResult,
  deleteJantungError: state.JantungReducer.deleteJantungError,
});

export default connect(mapStateToProps, null)(ListJantung);
