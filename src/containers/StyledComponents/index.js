import styled from "styled-components";

export const CellWrapper = styled.div`
  background-color: ${(props) =>
    props.isWeekday ? "rgb(253 186 116)" : "rgb(203 213 225)"};
  border: 2px solid rgb(107 114 128);
  height: 12vh;
  width: 17vh;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.isWeekday ? "rgb(254 215 170)" : "rgb(241 245 249)"};
  }
  color: ${(props) => (props.isSelectedMonth ? "#000" : "rgb(100 116 139)")};
  font-weight: ${(props) => (props.isSelectedMonth ? "500" : "300")};
`;

export const RowInCell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
  ${(props) => props.pr && `padding-right: ${props.pr * 8}px`}
`;

export const EventTitle = styled("input")`
  padding: 8px 14px;
  font-size: 0.85rem;
  width: 100%;
  border: unset;
  background-color: rgb(107 114 128);
  color: #000;
  outline: unset;
  border-bottom: 1px solid #464648;
`;

export const EventBody = styled("textarea")`
  padding: 8px 14px;
  font-size: 0.85rem;
  width: 100%;
  border: unset;
  background-color: rgb(226 232 240);
  color: #000;
  outline: unset;
  border-bottom: 1px solid #464648;
  resize: none;
  height: 60px;
`;

export const ShadowWrapper = styled("div")`
  width: 119vh;
  height: 90vh;
  border-radius: 3vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const FormPositionWrapper = styled("div")`
  position: absolute;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.35);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormWrapper = styled("div")`
  padding: 4vh;
  background-color: aliceblue;
  border-radius: 3vh;
  min-width: 260px;
`;

export const DayWrapper = styled.div`
  display: flex;
  height: 3vh;
  width: 3vh;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
`;

export const CurrentDay = styled("div")`
  display: flex;
  height: 3vh;
  width: 3vh;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  background-color: #f00;
`;

export const ShowDayWrapper = styled("div")`
  display: flex;
  justify-content: flex-end;
`;

export const EventListWrapper = styled("ul")`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const EventListItemWrapper = styled("li")`
  padding-left: 2px;
  padding-right: 2px;
  margin-bottom: 2px;
  display: flex;
`;

export const EventItemWrapper = styled("button")`
  position: relative;
  flex-grow: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 13vh;
  border: unset;
  color: #000;
  cursor: pointer;
  margin: 0;
  padding: 0;
  text-align: left;
  border: 1px solid #5d5f63;
  border-radius: 2px;
	&:hover {
		background-color: rgb(253 186 116)
`;

export const DayShowWrapper = styled("div")`
  display: flex;
  flex-grow: 1;
  border-top: 1px solid rgb(107 114 128);
`;

export const EventsListWrapper = styled("div")`
  background-color: rgb(203 213 225);
  color: #000;
  flex-grow: 1;
`;

export const EventFormWrapper = styled("div")`
  background-color: rgb(203 213 225);
  color: #000;
  width: 50vh;
  position: relative;
  border-left: 1px solid rgb(107 114 128);
`;

export const ScaleWrapper = styled("div")`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 4px;
  position: relative;
`;

export const ScaleCellWrapper = styled("div")`
  flex-grow: 1;
  position: relative;
  &:not(:last-child) {
    border-bottom: 1px solid rgb(107 114 128);
  }
  margin-left: 32px;
`;

export const ScaleCellTimeWrapper = styled("div")`
  position: absolute;
  left: -26px;
  top: -6px;
  font-size: 8px;
`;

export const ScaleCellEventWrapper = styled("div")`
  min-height: 3vh;
`;

export const EventItemButton = styled(EventItemWrapper)`
  min-width: ${(props) => props.w}px;
  height: ${(props) => props.h}px;
  margin-left: 4px;
  position: absolute;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
  display: flex;
  padding: 1px;
  background-color: rgb(253 186 116);
  border: 1px solid rgb(254 215 170);
  color: black;
`;

export const SelectEventTimeWrapper = styled("div")`
  padding: 8px 14px;
  border-bottom: 1px solid #464648;
  display: flex;
  background-color: rgb(107 114 128);
`;

export const ListOfHours = styled("ul")`
  list-style-type: none;
  margin: 0;
  padding: 0 5px 0 5px;
  height: 120px;
  overflow-y: scroll;
  color: #000;
  position: absolute;
  left: -30px;
  border: 2px solid rgb(107 114 128);
  border-radius: 1.5vh;
  background-color: rgb(239, 239, 239);
`;

export const PositionRelative = styled("div")`
  position: relative;
`;

export const HoursButton = styled("button")`
  border: none;
  background-color: unset;
  cursor: pointer;
	&:hover {
		background-color: rgb(254 215 170)};
		border-radius: 1vh ;
	}
`;

export const RedLine = styled("div")`
  background-color: #f00;
  height: 2px;
  position: absolute;
  left: 0;
  right: 0;
  top: ${(props) => props.position}%;
`;

export const Button = styled("button")`
  border: 2px solid rgb(31 41 55);
  border-radius: 8px;
  padding: 6px;
  color: black;
  margin-right: 5px;
  color: ${(props) => (props.white ? "#fff" : "#000")};
  &:hover {
    background-color: ${(props) =>
      props.danger ? "rgb(153 27 27)" : "rgb(253 186 116)"};
			color: #000;
  };
  
`;
