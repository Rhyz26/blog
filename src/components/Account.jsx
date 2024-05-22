import { Menu, Button } from '@mantine/core';
;

function Account() {

  return (


    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button>Toggle menu</Button>
      </Menu.Target>



      <Menu.Dropdown className='black'>
        {/* <Menu.Label>Application</Menu.Label> */}
       
        <Menu.Item className='text-white font-bold '>
          LOGIN
        </Menu.Item>
        
        <Menu.Item className='text-white font-bold'>
          SIGN UP
        </Menu.Item>
       
        <Menu.Item className='text-white font-bold'>
          GET HELP
        </Menu.Item>
        
      </Menu.Dropdown>
       

        
    </Menu>
  );
}
export default Account;