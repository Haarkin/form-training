export default function Input({ label, id, error, ...props }) {
    return (
        <div className="control-row">
            <div className="control no-margin">
            <label htmlFor={id}>{label}</label>
            <input 
                id={id} 
                {...props}
            />
            <div className='control-error'>{error && <p>{error}</p>}</div>
            </div>

            <div className="control no-margin">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" name="password" onChange={(event) => handleChanges('password', event)} value={enteredInfo.password} />
            </div>
        </div>
    )
}