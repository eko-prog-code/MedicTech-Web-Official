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
import { getListGigi, searchListGigi } from "actions/GigiAction";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import HeroAkredbg from "../../images/HeroAkredBg.png";
import './categori.css';

class ListGigi extends Component {
  componentDidMount() {
    this.props.dispatch(getListGigi());
  }

  handleSearch = (e) => {
    this.props.dispatch(searchListGigi(e.target.value));
  };

  render() {
    const { getListGigiError, getListGigiLoading, getListGigiResult } =
      this.props;
    return (
      <div className="content">
        <Card>
          <Row className="px-4 align-items-center justify-content-between">
            <CardHeader>
              <CardTitle tag="h4">Dokter Spesialis Gigi</CardTitle>
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
              {getListGigiResult ? (
                Object.keys(getListGigiResult).map((key) => (
                  <tr key={key}>
                    <td>
                      <tr class="bg-primary text-white">
                        <img
                            src={getListGigiResult[key].image}
                            width="100"
                            alt={getListGigiResult[key].title}
                          />
                        <td>{getListGigiResult[key].senin}</td>
                        <td>{getListGigiResult[key].selasa}</td>
                        <td>{getListGigiResult[key].rabu}</td>
                        <td>{getListGigiResult[key].kamis}</td>
                        <td>{getListGigiResult[key].jumat}</td>
                        <td>{getListGigiResult[key].sabtu}</td>
                      </tr>
                      <tr>
                        <th scope="row">
                        {getListGigiResult[key].title}
                        </th>
                      </tr>
                      <tr></tr>
                    </td>
                  </tr>
                ))
              ) : getListGigiLoading ? (
                <tr>
                  <td colSpan="3" align="center">
                    <Spinner color="primary" />
                  </td>
                </tr>
              ) : getListGigiError ? (
                <tr>
                  <td colSpan="3" align="center">
                    {getListGigiError}
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
  getListGigiLoading: state.GigiReducer.getListGigiLoading,
  getListGigiResult: state.GigiReducer.getListGigiResult,
  getListGigiError: state.GigiReducer.getListGigiError,

  deleteGigiLoading: state.GigiReducer.deleteGigiLoading,
  deleteGigiResult: state.GigiReducer.deleteGigiResult,
  deleteGigiError: state.GigiReducer.deleteGigiError,
});

export default connect(mapStateToProps, null)(ListGigi);
