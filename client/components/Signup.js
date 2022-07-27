import React from 'react'

const Signup = (props) => {

  return (
    <div>
			<h1>Signup Here!</h1>
      <form>
			{/* <form onSubmit={handleSubmit}> */}
				<div>
					<label htmlFor="username">
						<small>Username</small>
					</label>
					<input name="username" type="text" />
				</div>
				<div>
					<label htmlFor="password">
						<small>Password</small>
					</label>
					<input name="password" type="text" />
				</div>
				<div>
					<button type="submit">Sign Up</button>
				</div>
			</form>
		</div>
  )
}

export default Signup
