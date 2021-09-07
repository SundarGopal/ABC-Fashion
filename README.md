# ABC FASHION APP

## CONTRIBUTERS
- ### **Sundar G**
- ### **Sreyas S**
- ### **Umeshraja N**
- ### **Mohammed Awais H**

<br>

## SETTING UP THE APP

- Clone the repo using the following command

	`git clone https://github.com/sundar-gopal/ABC-Fashion.git`

- Then go into the folder
 
	`cd ABC-Fashion`

- Install the dependencies

	`yarn install`

- Go to ios directory and install using pod
	
	`cd /ios`
	
	`pod install`
	
<br>	

## TROUBLE SHOOTING

###### Try installing any of the following the dependencies

- `yarn add @react-native-async-storage/async-storage`
- `yarn add @react-navigation/stack`
- `yarn add react-native-gesture-handler`
- `yarn add react-native-screens react-native-safe-area-context`
- `yarn add @react-navigation/native`
- `yarn add @react-navigation/native-stack`
- `yarn add @react-navigation/bottom-tabs`


 ###### APP BUILDING ERROR
1. **Issue in loading the vector icons**

	Try unlinking and linking the react-native-vector-icons module.

	Follow the steps given below :
	- Unlink the vector icon module
	`react-native unlink react-native-vector-icons`
	- Build the app 
	  `yarn ios`	    
	- After the app has been build and started running, come back to the **ABC-Fashion** folder and run
`react-native link react-native-vector-icons`
