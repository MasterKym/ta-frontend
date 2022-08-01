import { useState } from 'react';
import {
  BsBellFill,
  BsFillPersonFill,
  BsList,
  BsLockFill,
  BsTrashFill,
  BsX,
} from 'react-icons/bs';
import Account from './tabs/Account';

function Settings() {
  // in order to look as close as possible to the original desing Idisabled icons state for now
  // eslint-disable-next-line
  const [enableIcons, setEnableIcons] = useState(false);
  const tabs = [
    {
      name: 'Account',
      id: 'account',
      icon: enableIcons && <BsFillPersonFill className="mr-2" />,
      disabled: false,
    },
    {
      name: 'Notifications',
      id: 'notifications',
      icon: enableIcons && <BsBellFill className="mr-2" />,
      disabled: false,
    },
    {
      name: 'Security',
      id: 'security',
      icon: enableIcons && <BsLockFill className="mr-2" />,
      disabled: false,
    },
    {
      name: 'Delete Account',
      id: 'delete_account',
      icon: enableIcons && <BsTrashFill className="mr-2" />,
      disabled: false,
    },
  ];
  // the account tab is the default tab
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  // state for managing mobile navbar
  const [NavOpened, setNavOpened] = useState(false);

  // this function is used to get the component for the active tab
  const tabComponent = (tabId: string) => {
    switch (tabId) {
      case 'account':
        return <Account />;
      case 'notifications':
        return <div>Notifications</div>;
      case 'security':
        return <div>Security</div>;
      case 'delete_account':
        return <div>Delete Account</div>;
      default:
        return <div>404</div>;
    }
  };

  return (
    <div
      className={`w-full h-screen flex md:flex-row flex-col lg:px-[200px] md:px-[50px] sm:px-[10px] bg-[#F5F5F5]`}
    >
      <div className="block md:hidden">
        <div className="md:w-[300px] w-full p-0 md:p-4  flex flex-col justify-start items-start h-[80%] my-auto select-none">
          <div className="flex flex-row w-full items-center justify-between p-3">
            <h1 className="text-3xl font-bold">Settings</h1>
            <button
              onClick={() => setNavOpened(!NavOpened)}
              className="md:hidden block transition-all active:scale-[99%] "
            >
              {NavOpened ? (
                <BsX className="text-3xl" />
              ) : (
                <BsList className="text-3xl" />
              )}
            </button>
          </div>
          {NavOpened && (
            <div
              className={`fixed left-[5%] right-[5%] top-[5%] bg-white p-3 shadow-lg border rounded-md border-[#7F265B]  h-auto flex flex-col justify-start items-start mt-12`}
            >
              {tabs.map((tab) => (
                <button
                  disabled={tab.disabled}
                  key={tab.id}
                  className={`font-bold px-6 text-[#80265C] py-2 text-sm text-left rounded-[10px] mb-4 hover:bg-[#E5D4DE] w-full transition-all active:scale-[99%] ${
                    tab.id === activeTab ? 'bg-[#E5D4DE]' : ''
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {/* No icons on Mobile divces */}
                  {tab.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="hidden md:flex">
        <div className="w-[300px] md:p-4 flex flex-col justify-start items-start h-[80%] my-auto select-none">
          <div className="flex flex-row w-full items-center justify-between">
            <h1 className="text-3xl font-bold">Settings</h1>
          </div>
          <div
            className={`p-3 h-auto flex flex-col justify-start items-start mt-12`}
          >
            {tabs.map((tab) => (
              <button
                disabled={tab.disabled}
                key={tab.id}
                className={`flex flex-row items-center gap-2 font-bold px-6 py-2 text-md text-left rounded-[10px] mb-4 w-full 
                 ${tab.id === activeTab ? 'bg-[#E5D4DE]' : ''}
                  ${
                    !tab.disabled
                      ? 'hover:bg-[#E5D4DE] transition-all active:scale-[99%] text-[#80265C]'
                      : 'text-[#c79eb6] cursor-not-allowed'
                  }

                  `}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-row flex w-full md:w-[750px] h-auto items-center ">
        {tabComponent(activeTab)}
      </div>
    </div>
  );
}

export default Settings;
