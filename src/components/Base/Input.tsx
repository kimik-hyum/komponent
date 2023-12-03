import { useState } from "react";
import connect from "../../util/connect";

const Input = () => {
  const [type, setType] = useState("password");
  const [value, send] = useState("");
  const api = connect(value, send);
  const inputApi = connect(value, setType);
  return (
    <div>
      <input
        {...{ value, type }}
        {...api.createFormEventHandler<HTMLInputElement>(
          ["onChange"],
          (event) => event.target.value
        )}
      />
      <button
        {...api.createEventHandler(["onClick"], "")}
        {...api.getContentProps(!!value)}
      >
        삭제
      </button>
      <button
        {...inputApi.createEventHandler(
          ["onClick"],
          type === "text" ? "password" : "text"
        )}
        {...api.getContentProps(!!value)}
      >
        보이기
      </button>
    </div>
  );
};

export default Input;
