import React from 'react';
import styled from '@emotion/styled/macro';
import Skeleton from "./components/Skeleton";

const Base = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 12px;
    row-gap: 24px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
    border-radius: 4px;
`;

const ImageWrapper = styled.div`
    width: 100%;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Info = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
`;

const Title = styled.h4`
    margin: 0;
    padding: 0;
    font-size: 24px;
`;

const Description = styled.p`
    margin: 8px 0 0 0;
    padding: 0;
    font-size: 16px;
`;

const Item: React.FC = () => {
    return (
        <Container>
            <ImageWrapper>
                <Image src="https://ichef.bbci.co.uk/news/640/cpsprodpb/E172/production/_126241775_getty_cats.png">
                </Image>
            </ImageWrapper>
            <Info>
                <Title>
                    Cat Taking a nap
                </Title>
                <Description>
                    zzzzzzzzzzzzzzzzzzzzzzzzzzz
                </Description>
            </Info>
        </Container>
    )

}

function App() {
  return (
    <Base>
        {
            Array.from({length: 25}).map((_, idx) => (
                <Item key={idx}></Item>
            ))
        }
    </Base>
  );
}

export default App;
