import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
  FundOutlined,
  UserOutlined,
  MessageOutlined,
  LayoutOutlined,
  CalendarOutlined,
  CreditCardOutlined,
  SettingOutlined,
  FolderOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
const { SubMenu } = Menu;

const DashboardADMIN = () => {
  return (
    <div className="w-full relative bg-brand-background-card-light overflow-hidden flex flex-row items-start justify-start tracking-[normal] text-left text-base text-text-7 font-text-xl-semibold">
      <div className="h-[1024px] w-[280px] flex flex-col items-start justify-start">
        <div className="self-stretch flex-1 bg-text-2 shadow-[2px_6px_3px_-1px_rgba(6,_25,_56,_0.07)] flex flex-col items-start justify-start pt-10 px-0 pb-5 gap-[40px] mq450:gap-[20px] mq700:pt-5 mq700:box-border mq975:pt-[26px] mq975:pb-5 mq975:box-border">
          <div className="self-stretch flex flex-col items-start justify-start py-0 px-4">
            <div className="self-stretch rounded-lg bg-text-3 flex flex-row items-center justify-start py-3 px-4 gap-[12px]">
              <div className="h-[24.9px] w-[24.6px] relative">
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full"
                  loading="eager"
                  alt=""
                  src="/vector.svg"
                />
                <div className="absolute top-[18.43px] left-[2.6px] bg-khaki w-[3.9px] h-[3.9px] [transform:_rotate(-0.49deg)] [transform-origin:0_0] z-[1]" />
              </div>
              <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[26px] font-medium">
                    Buzz Coworking
                  </div>
                  <div className="self-stretch relative text-sm leading-[24px] text-gray-400">
                    123 Main Street
                  </div>
                </div>
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  loading="eager"
                  alt=""
                  src="/chevronselectorvertical.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-col items-start justify-start py-0 px-4 text-sm text-gray-400">
            {/* <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch rounded-xl bg-brand-brand-primary flex flex-row items-center justify-start py-3 px-4 gap-[12px] text-smi text-base-white">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  alt=""
                  src="/linechartup04.svg"
                />
                <input
                  className="w-[calc(100%_-_56px)] [border:none] [outline:none] font-medium font-text-xl-semibold text-sm bg-[transparent] h-6 flex-1 relative leading-[24px] text-base-white text-left flex items-center min-w-[108px]"
                  placeholder="Dashboard"
                  type="text"
                />
              
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-3 px-4 gap-[12px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  loading="eager"
                  alt=""
                  src="/user01.svg"
                />
                <div className="flex-1 relative leading-[24px] font-medium">
                  Members
                </div>
               
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-3 px-4 gap-[12px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  loading="eager"
                  alt=""
                  src="/layoutalt01.svg"
                />
                <div className="flex-1 relative leading-[24px] font-medium">
                  Spaces
                </div>
        
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-3 px-4 gap-[12px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  loading="eager"
                  alt=""
                  src="/messagedotscircle.svg"
                />
                <div className="flex-1 relative leading-[24px] font-medium">
                  Message Center
                </div>
                <div className="h-5 rounded-981xl bg-brand-brand-primary flex flex-col items-center justify-center py-0.5 px-1.5 box-border text-smi text-base-white">
                  <div className="relative tracking-[0.04em] leading-[19px] font-semibold">
                    4
                  </div>
                </div>
                <img
                  className="h-6 w-6 relative object-contain hidden min-h-[24px]"
                  alt=""
                />
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-3 px-4 gap-[12px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  loading="eager"
                  alt=""
                  src="/calendar.svg"
                />
                <div className="flex-1 relative leading-[24px] font-medium">
                  Calendar
                </div>
               
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-3 px-4 gap-[12px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  loading="eager"
                  alt=""
                  src="/folder.svg"
                />
                <div className="flex-1 relative leading-[24px] font-medium">
                  Files
                </div>
               
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-3 px-4 gap-[12px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  loading="eager"
                  alt=""
                  src="/wallet02.svg"
                />
                <div className="flex-1 relative leading-[24px] font-medium">
                  Finances
                </div>
                
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-3 px-4 gap-[12px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  loading="eager"
                  alt=""
                  src="/settings01.svg"
                />
                <div className="flex-1 relative leading-[24px] font-medium">
                  Settings
                </div>
               
              </div>
            </div> */}
            <Menu
              className="self-stretch flex flex-col items-start justify-start gap-[8px] bg-[#1f2937]"
              defaultSelectedKeys={['1']}
              theme="dark"
              mode="vertical"
            >
              <Menu.Item style={{ backgroundColor: '#6366f1' }} key="1" icon={<FundOutlined />}>
                Dashboard
              </Menu.Item>
              <Menu.Item key="2" icon={<UserOutlined />}>
                <Link to='/member'>Member</Link>
              </Menu.Item>
              <SubMenu key="sub1" title="Spaces" icon={<LayoutOutlined />}>
                <Menu.Item key="sub1-1">Option 1</Menu.Item>
                <Menu.Item key="sub1-2">Option 2</Menu.Item>
                <Menu.Item key="sub1-3">Option 3</Menu.Item>
              </SubMenu>
              <Menu.Item key="3" icon={<MessageOutlined />}>
                Message Center
                <div className="h-5 rounded-981xl bg-brand-brand-primary flex flex-col items-center justify-center py-0.5 px-1.5 box-border text-smi text-base-white">
                  <div className="relative tracking-[0.04em] leading-[19px] font-semibold">
                    4
                  </div>
                </div>
                <img
                  className="h-6 w-6 relative object-contain hidden min-h-[24px]"
                  alt=""
                />
              </Menu.Item>
              <Menu.Item key="4" icon={<CalendarOutlined />}>
                Calendar
              </Menu.Item>
              <Menu.Item key="5" icon={<FolderOutlined />}>
                Files
              </Menu.Item>
              <SubMenu key="sub2" title="Finances" icon={<CreditCardOutlined />}>
                <Menu.Item key="sub2-1">Option 1</Menu.Item>
                <Menu.Item key="sub2-2">Option 2</Menu.Item>
                <Menu.Item key="sub2-3">Option 3</Menu.Item>
              </SubMenu>
              <Menu.Item key="6" icon={<SettingOutlined />}>
                Settings
              </Menu.Item>
            </Menu>
          </div>
        </div>
        <div className="self-stretch bg-gray-700 flex flex-row items-center justify-start py-4 px-6 gap-[12px] text-sm text-gray-300">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            loading="eager"
            alt=""
            src="/lifebuoy01.svg"
          />
          <div className="flex-1 relative leading-[24px] font-medium">
            Helpdesk
          </div>
          <div className="h-5 rounded-981xl bg-brand-brand-primary hidden flex-col items-center justify-center py-0.5 px-1.5 box-border text-smi text-base-white">
            <div className="relative tracking-[0.04em] leading-[19px] font-semibold">
              4
            </div>
          </div>
          <img
            className="h-6 w-6 relative object-contain min-h-[24px]"
            loading="eager"
            alt=""
            src="/icon--stroke--chevron--down-2@2x.png"
          />
        </div>
      </div>
      <header className="h-[72px] flex-1 bg-base-white box-border overflow-hidden flex flex-col items-center justify-start max-w-full text-left text-xl text-typography-subheading font-text-xl-semibold border-b-[1px] border-solid border-gray-200">
        <div className="self-stretch flex-1 flex flex-col items-start justify-between py-0 px-8 box-border max-w-full">
          <div className="self-stretch flex flex-row items-center justify-between gap-[20px] max-w-full">
            <div className="w-[581px] flex flex-row items-center justify-start gap-[24px] max-w-full">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="eager"
                alt=""
                src="/menu01.svg"
              />
              <div className="flex flex-row items-center justify-start">
                <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit">
                  Dashboard
                </h3>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="rounded-md bg-base-white overflow-hidden flex flex-row items-start justify-start p-2.5">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    loading="eager"
                    alt=""
                    src="/infocircle.svg"
                  />
                </div>
                <div className="rounded-md bg-base-white overflow-hidden flex flex-row items-start justify-start p-2.5">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    loading="eager"
                    alt=""
                    src="/bell01.svg"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <img
                  className="w-10 h-10 rounded-181xl object-cover"
                  loading="eager"
                  alt=""
                  src="/avatar@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default DashboardADMIN;
