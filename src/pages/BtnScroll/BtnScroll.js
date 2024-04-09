import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import ScrollMenu from 'react-horizontal-scroll-menu';
import './BtnScroll.css';


function BtnScroll() {
  const [show, setShow] = useState(false);
  const [showKontak, setShowKontak] = useState(false);
  const [showLayanan, setShowLayanan] = useState(false);
  const [showMedCoin, setShowMedCoin] = useState(false);
  const [showAkun, setShowAkun] = useState(false);
  const [showRekanan, setShowRekanan] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseKontak = () => setShowKontak(false);
  const handleShowKontak = () => setShowKontak(true);

  const handleCloseLayanan = () => setShowLayanan(false);
  const handleShowLayanan = () => setShowLayanan(true);

  const handleShowMedCoin = () => {
    window.open('https://docs.google.com/document/d/189fyTCmYl6zt0r4TVb_8nEbFP6bZ2RZJGX2DONUvv1o/edit?usp=sharing', '_blank');
  };

  const handleCloseAkun = () => setShowAkun(false);
  const handleShowAkun = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLScowr5Zp_uBsNAH_O75wwcAQ8K-BoU2QiEejyf01HzlkmN8sQ/viewform?usp=sf_link', '_blank');
  };

  const handleCloseRekanan = () => setShowRekanan(false);
  const handleShowRekanan = () => setShowRekanan(true);

  return (
    <div class="scrollmenu">
      <a>
        <Button onClick={handleShow} className="menu-item.active">Tentang Kami</Button>
      </a>

      <a>
        <Button onClick={handleShowLayanan} className="menu-item.active">Layanan</Button>
      </a>

      <a>
        <Button onClick={handleShowMedCoin} className="menu-item.active">MedCoin</Button>
      </a>

      <a>
        <Button onClick={handleShowRekanan} className="menu-item.active">Rekanan</Button>
      </a>

      <a>
        <Button onClick={handleShowAkun} className="menu-item.active">Hapus Akun MedicTech App</Button>
      </a>

      <a>
        <Button onClick={handleShowKontak} className="menu-item.active">Kontak</Button>
      </a>

      <a href="https://goo.gl/maps/iPNXfVVCjRcccwTQ8">
        <Button className="menu-item.active">Lokasi</Button>
      </a>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>MEDICTECH</Modal.Title>
        </Modal.Header>
        <Modal.Body>Platform Kesehatan menggunakan BigData & AI Technology</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showKontak} onHide={handleCloseKontak}>
        <Modal.Header closeButton>
          <Modal.Title>Kirim Email ke MEDICTECH</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nama</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Pesan</Form.Label>
              <Form.Control as="textarea" rows={3}
              placeholder="pesan Anda" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseKontak}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseKontak}>
            Kirim
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showLayanan} onHide={handleCloseLayanan}>
        <Modal.Header closeButton>
          <Modal.Title>Layanan Kami</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Referensi Resep Obat&hellip;</p>
        <p>Rekam Medis Digital&hellip;</p>
        <p>Layanan Kesehatan Online&hellip;</p>
        <p>Rekam Medis Elektronik&hellip;</p>
        <p>MedCoin&hellip;</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseLayanan}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showMedCoin} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>MedCoin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Get CFO&hellip;</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showAkun} onHide={handleCloseAkun}>
        <Modal.Header closeButton>
          <Modal.Title>Akun</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Get Team StarUp MEDICTECH&hellip;</p>
        <p>Get Investor for GrowUp&hellip;</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseAkun}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showRekanan} onHide={handleCloseRekanan}>
        <Modal.Header closeButton>
          <Modal.Title>Rekanan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Bidan Praktek Mandiri "Bidan Siti"&hellip;</p>
        <p>Saras Care Center &hellip;</p>
        <p>Klinik Shazfa Mounira</p>
        <p>Klinik Afifa</p>
        <p>Klinik R & A</p>
        <p>Internship</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseRekanan}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default BtnScroll;
