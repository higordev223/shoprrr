import React from 'react';
import BannerItem from '../../components/banner-item/banner-item.component';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

class Contact extends React.Component {
  render() {
    return (
      <ContactContainer>
        <BannerItem
          className="mx-0 mx-md-5"
          background="https://i.ibb.co/LCFPn7t/Contact-pageheading.jpg"
          bannerheight="500px"
          bannertype="center"
        >
          <div className="flex_arrange">
            <h1>Contact Us</h1>
          </div>
        </BannerItem>
        <Container>
          <h4 className="text-center">
            Frontend developer and Javascript engineer. Working with my hands to make magic happen on the
            internet. View my Projects, Articles, Resumé, Contact Me, or send me
            an email at onlynikitalarin@gmail.com.
          </h4>
        </Container>
      </ContactContainer>
    );
  }
}

const ContactContainer = styled.div`
  h4 {
    font-size: 20px;
    line-height: 40px;
    font-weight: 400;
    color: #949494;
    margin-top: 3rem;
  }
  .card {
    background: #f5f5f5;
    border: none;
    margin: 3rem auto;
    padding: 40px;
  }
  p {
    font-size: 18px;
    a {
      font-size: 18px;
    }
    b {
      font-size: 18px;
    }
  }
`;

export default Contact;
