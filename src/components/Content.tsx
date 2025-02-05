import { useAppSelector } from "@/store/hooks";

const Content = () => {

  const TargetBoxLabel = useAppSelector(state => state.panel.sourceBoxData);
  const sliderValue = useAppSelector((state) => state.panel.sliderValueNumber);  


  return (
    <>
    <h1>{TargetBoxLabel.label}</h1>
    <h1>{sliderValue}</h1>
    </>
  )
};

export default Content;
