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
import { getListKandungan, searchListKandungan } from "actions/KandunganAction";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import HeroAkredbg from "../../images/HeroAkredBg.png";
import './categori.css';

class ListKandungan extends Component {
  componentDidMount() {
    this.props.dispatch(getListKandungan());
  }

  handleSearch = (e) => {
    this.props.dispatch(searchListKandungan(e.target.value));
  };

  render() {
    const { getListKandunganError, getListKandunganLoading, getListKandunganResult } =
      this.props;
    return (
      <div className="content">
        <Card>
          <Row className="px-4 align-items-center justify-content-between">
            <CardHeader>
              <CardTitle tag="h4">Dokter Spesialis Kandungan</CardTitle>
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
              {getListKandunganResult ? (
                Object.keys(getListKandunganResult).map((key) => (
                  <tr key={key}>
                    <td>
                      <tr class="bg-primary text-white">
                        <img
                            src={getListKandunganResult[key].image}
                            width="100"
                            alt={getListKandunganResult[key].title}
                          />
                        <td>{getListKandunganResult[key].senin}</td>
                        <td>{getListKandunganResult[key].selasa}</td>
                        <td>{getListKandunganResult[key].rabu}</td>
                        <td>{getListKandunganResult[key].kamis}</td>
                        <td>{getListKandunganResult[key].jumat}</td>
                        <td>{getListKandunganResult[key].sabtu}</td>
                      </tr>
                      <tr>
                        <th scope="row">
                        {getListKandunganResult[key].title}
                        </th>
                      </tr>
                      <tr></tr>
                    </td>
                  </tr>
                ))
              ) : getListKandunganLoading ? (
                <tr>
                  <td colSpan="3" align="center">
                    <Spinner color="primary" />
                  </td>
                </tr>
              ) : getListKandunganError ? (
                <tr>
                  <td colSpan="3" align="center">
                    {getListKandunganError}
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
  getListKandunganLoading: state.KandunganReducer.getListKandunganLoading,
  getListKandunganResult: state.KandunganReducer.getListKandunganResult,
  getListKandunganError: state.KandunganReducer.getListKandunganError,

  deleteKandunganLoading: state.KandunganReducer.deleteKandunganLoading,
  deleteKandunganResult: state.KandunganReducer.deleteKandunganResult,
  deleteKandunganError: state.KandunganReducer.deleteKandunganError,
});

export default connect(mapStateToProps, null)(ListKandungan);
