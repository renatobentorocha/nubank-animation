import styled from 'styled-components/native';

export const AccountWrapper = styled.View`
  align-items: center;
`;

export const BankInformations = styled.View`
  margin: 15px 0 20px 0;
`;

export const BankTextWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const BankText = styled.Text`
  color: #fff;
  margin-bottom: 10px;
`;

export const BankBoldText = styled(BankText)`
  font-weight: bold;
`;

export const OptionsWrapper = styled.View``;

export const Option = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const OptionTextWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const OptionText = styled.Text`
  color: #fff;
  font-size: 16px;
  padding: 15px;
`;

export const OptionMicroCopy = styled.Text`
  color: #bf90cd;
  padding-left: 15px;
  margin-top: -15px;
  margin-bottom: 15px;
  font-size: 12px;
`;

export const WraperFlexDirectionColumn = styled.View`
  justify-content: center;
`;
