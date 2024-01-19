import StatusButton from "../../models/button_status_enum";

type ButtonPrimary = {
  status: StatusButton;
  name: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";

};


const ButtonPrimary: React.FC<ButtonPrimary> = (props) => {
  const status = props.status;
  if (status == StatusButton.Enabled) {
    return (<button className="button w-full" onClick={props.onClick} type={props.type}>{props.name}</button>);
  } else if (status == StatusButton.Disabled) {
    return (<button className="button-disabled  w-full" type="button" >{props.name}</button>)
  }
  else if (status == StatusButton.Loading) {
    return (<button className="buttonForm  w-full" type="button">
      <div className="flex flex-row items-center justify-center">
        <span
          className=""
        >Cargando...</span>
        <i className="pi pi-spin pi-spinner ml-5" style={{ fontSize: '2rem' }}></i>
      </div>
    </button>)
  }

  else {
    return (<button className="button-disabled  w-full" type="button" onClick={() => { }}>{props.name}</button>);
  }

}

export default ButtonPrimary;
