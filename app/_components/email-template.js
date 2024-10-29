import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from 'react';

export const EmailTemplate = ({
 responce
}) => (
  <Html>
    <Head />
    <Preview>🎉 Someone shared a file with you! Check it out! 🙌</Preview>
    <Body style={main}>
      <Container>
        <Section style={logo}>
          <Img src="/logo1.png" alt="EasyShare Logo" />
        </Section>

        <Section style={content}>
          <Row>
            <Img
              style={image}
              width={620}
              src="/logo1.png"
              alt="EasyShare Header"
            />
          </Row>

          <Row style={{ ...boxInfos, paddingBottom: "0" }}>
            <Column>
              <Heading
                style={{
                  fontSize: 32,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Hi {responce?.emailToSend.split("@")[0]}!
              </Heading>
              <Heading
                as="h2"
                style={{
                  fontSize: 26,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                🎉 Someone shared a file with you! Check it out! 🙌
              </Heading>

              <Text style={paragraph}>
                <b>File Name: </b>
                {responce.fileName || 'Not provided'}
              </Text>
              <Text style={{ ...paragraph, marginTop: -5 }}>
                <b>File Size: </b>
                {responce.fileSize || 'Not provided'}
              </Text>
              <Text style={{ ...paragraph, marginTop: -5 }}>
                <b>File Type: </b>
                {responce.fileType || 'Not provided'}
              </Text>

              <Text style={paragraph}>
                Now you can also share your files with EasyShare, and it's super easy and totally free! 🎉
              </Text>
              <Text style={{ ...paragraph, marginTop: -5 }}>
                Just click the button below to grab your file!
              </Text>
            </Column>
          </Row>
          <Row style={{ ...boxInfos, paddingTop: "0" }}>
            <Column style={containerButton} colSpan={2}>
              <Button style={button} href={responce.shortUrl}>Click here to Download</Button>
            </Column>
          </Row>
        </Section>

        <Section style={containerImageFooter}>
          <Img
            style={image}
            width={620}
            src="/footer-image.png" // Update with the correct path to your footer image
            alt="EasyShare Footer"
          />
        </Section>

        <Text
          style={{
            textAlign: "center",
            fontSize: 12,
            color: "rgb(0,0,0, 0.7)",
          }}
        >
          © 2024 | EasyShare✨., 8888 University Dr W., Burnaby, BC V5A 1S6,
          CANADA | www.yelp.com
        </Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  padding: "30px 20px",
};

const containerButton = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const button = {
  backgroundColor: "#e00707",
  borderRadius: 3,
  color: "#FFF",
  fontWeight: "bold",
  border: "1px solid rgb(0,0,0, 0.1)",
  cursor: "pointer",
  padding: "12px 30px",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const image = {
  maxWidth: "100%",
};

const boxInfos = {
  padding: "20px",
};

const containerImageFooter = {
  padding: "45px 0 0 0",
};
