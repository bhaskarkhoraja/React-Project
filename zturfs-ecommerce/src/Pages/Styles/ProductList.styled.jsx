import styled from "styled-components";

export const Container = styled.div``;

const media = {
  mobile: "@media only screen and (max-width: 730px)"
};

export const Title = styled.h1`
  margin: 25px;
  font-size: 40px;

  ${media.mobile}{
    margin: 10px;
    font-size: 25px;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  transition: all 0.3s ease;
`;

export const Filter = styled.div`
  margin: 20px;

  ${media.mobile} {
    margin: 10px;
  }
`;

export const FilterText = styled.span`
  padding: 0 25px 0 6px;
  font-size: 20px;
  font-weight: 600;

  ${media.mobile} {
    padding: 0 10px 0 4px;
  }
`;

export const Select = styled.select`
  margin-right: 20px;
  padding: 5px;
  font-size: 15px;
  outline: none;

  ${media.mobile} {
    margin: 5px 0 0 5px;
  }
`;

export const Option = styled.option`
  padding: 5px;
`;
