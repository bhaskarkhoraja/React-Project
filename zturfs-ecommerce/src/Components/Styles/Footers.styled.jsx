import styled from "styled-components";

const media = {
  mobile: "@media only screen and (max-width: 730px)",
};

export const Container = styled.div`
  background-color: #f5e7d5;
  padding: 20px;
  display: flex;
  height: 30vh;

  ${media.mobile} {
    flex-direction: column;
    height: fit-content;
    font-size: 0.8em;
  }
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;

  ${media.mobile} {
    margin-bottom: 20px;
  }
`;

export const Logo = styled.h1`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 30px;
  cursor: default;

  ${media.mobile} {
    text-align: center;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  font-weight: 400;
  cursor: default;

  ${media.mobile} {
    font-size: 15px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  margin-top: 30px;
  cursor: pointer;

  ${media.mobile} {
    justify-content: space-between;
    padding: 0 45px;
  }
`;

export const Icon = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.bg};
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;

  ${media.mobile} {
    margin-right: 0;
  }
`;

export const Center = styled.div`
  flex: 1;

  ${media.mobile} {
    margin-bottom: 40px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 30px;
  cursor: default;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

export const ListItem = styled.li`
  margin-bottom: 20px;
  width: 50%;
  cursor: pointer;
  font-size: 20px;
  font-weight: 400;

  ${media.mobile} {
    font-size: 15px;
  }
`;

export const Right = styled.div`
  flex: 1;
`;

export const ContactItem = styled.div`
  font-size: 20px;
  font-weight: 400;
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  ${media.mobile} {
    font-size: 15px;
  }
`;
