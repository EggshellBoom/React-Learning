## form
[Portal to form Demo](https://eggshellboom.github.io/form/)
This is a sign up form using a single react component, it follows certain rules:
* Fields are:
  * Name – required, a string
  * Email – required, must be a valid email address (*@*.*)
  * Confirm Email – must be the same as Email
  *	Password – must be at least 8 characters and contain at least one number
  *	Dev Skills – must be a number between 1 to 10, optional
  *	Accept Terms – checkbox
* Buttons are:
  *	Submit – when clicked, popup an alert with all entered info
  *	Clear – remove all entries
  *	Reset – reset to default values as shown above
  * preventive validation:
  *	‘Required’ field has to have value,
  *	Value type is enforced, i.e. numeric field can’t have characters,
  *	Email and password rules are enforced
  *	Inline error messages
