export function Input({
                          type = "text",
                          placeholder = "Input Something",
                          defaultValue,
                          value,
                          onValueChange,
                          className = "",
                          overrideClassName = false
                      }) {

    return <input type={type} defaultValue={defaultValue} value={value}
                  onChange={(e) => onValueChange ? onValueChange(e.target.value) : ""}
                  placeholder={placeholder}
                  className={overrideClassName ? className : ` w-64 border border-zinc-400 outline-0 py-2 px-2.5 rounded-md text-base focus:border-blue-500 hover:border-blue-600 ${className}`}/>;

}