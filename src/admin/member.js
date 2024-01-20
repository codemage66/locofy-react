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

const MembersADMIN = () => {
    return (
      <form className="m-0 w-full relative bg-brand-background-card-light overflow-hidden flex flex-row items-start justify-start tracking-[normal] mq1025:pl-5 mq1025:pr-5 mq1025:box-border">
        <div className="h-[1145px] w-[280px] flex flex-col items-start justify-start mq1025:hidden">
          <div className="self-stretch flex-1 bg-text-2 shadow-[2px_6px_3px_-1px_rgba(6,_25,_56,_0.07)] flex flex-col items-start justify-start pt-10 px-0 pb-5 gap-[40px] mq450:gap-[20px] mq750:pt-5 mq750:box-border mq1125:pt-[26px] mq1125:pb-5 mq1125:box-border">
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
                    <div className="self-stretch relative text-base leading-[26px] font-medium font-text-sm-semibold text-text-7 text-left">
                      Buzz Coworking
                    </div>
                    <div className="self-stretch relative text-sm leading-[24px] font-text-sm-semibold text-gray-400 text-left">
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
            <div className="self-stretch flex-1 flex flex-col items-start justify-start py-0 px-4">
            <Menu
              className="self-stretch flex flex-col items-start justify-start gap-[8px] bg-[#1f2937]"
              defaultSelectedKeys={['1']}
              theme="dark"
              mode="vertical"
            >
              <Menu.Item style={{ backgroundColor: '#6366f1' }} key="1" icon={<FundOutlined />}>
                <Link to='/dashboard'>Dashboard</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<UserOutlined />}>
                Members
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
          <div className="self-stretch bg-typography-body flex flex-row items-center justify-start py-4 px-6 gap-[12px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="eager"
              alt=""
              src="/lifebuoy01.svg"
            />
            <div className="flex-1 relative text-sm leading-[24px] font-medium font-text-sm-semibold text-gray-300 text-left">
              Helpdesk
            </div>
            <div className="h-5 rounded-981xl bg-brand-brand-primary hidden flex-col items-center justify-center py-0.5 px-1.5 box-border">
              <div className="relative text-smi tracking-[0.04em] leading-[19px] font-semibold font-text-sm-semibold text-base-white text-left">
                4
              </div>
            </div>
            <img
              className="h-6 w-6 relative object-contain min-h-[24px]"
              alt=""
              src="/icon--stroke--chevron--down-2@2x.png"
            />
          </div>
        </div>
        <main className="flex-1 flex flex-col items-center justify-start gap-[32px] max-w-[calc(100%_-_280px)] mq750:gap-[16px] mq1025:max-w-full">
          <header className="self-stretch bg-base-white box-border overflow-hidden flex flex-col items-center justify-start max-w-full border-b-[1px] border-solid border-gray-200">
            <div className="self-stretch flex flex-col items-start justify-between py-0 px-8 box-border min-h-[72px] max-w-full">
              <div className="self-stretch flex flex-row items-center justify-between gap-[20px] max-w-full mq1025:flex-wrap">
                <div className="w-[581px] flex flex-row items-center justify-start gap-[24px] max-w-full">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    loading="eager"
                    alt=""
                    src="/menu01.svg"
                  />
                  <div className="flex flex-row items-center justify-start">
                    <h3 className="m-0 relative text-xl leading-[32px] font-semibold font-text-sm-semibold text-gray-800 text-left">
                      Members
                    </h3>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <div className="flex flex-row items-start justify-start gap-[4px]">
                    <div className="rounded-md bg-base-white overflow-hidden flex flex-row items-start justify-start p-2.5">
                      <img
                        className="h-5 w-5 relative overflow-hidden shrink-0"
                        alt=""
                        src="/infocircle.svg"
                      />
                    </div>
                    <div className="rounded-md bg-base-white overflow-hidden flex flex-row items-start justify-start p-2.5">
                      <img
                        className="h-5 w-5 relative overflow-hidden shrink-0"
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
          <section className="w-[1096px] rounded-xl bg-base-white shadow-[0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)] flex flex-col items-start justify-start max-w-full mq1125:w-[calc(100%_-_40px)]">
            <div className="self-stretch bg-base-white flex flex-col items-start justify-start gap-[20px] max-w-full">
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start pt-5 px-6 pb-0 box-border gap-[16px] max-w-full">
                <div className="flex-1 flex flex-col items-start justify-center gap-[4px] min-w-[583px] max-w-full mq750:min-w-full">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                    <div className="relative text-lg leading-[28px] font-semibold font-text-sm-semibold text-gray-900 text-left">
                      All Members
                    </div>
                    <div className="h-[22px] rounded-2xl bg-primary-50 hidden flex-row items-center justify-start py-0.5 px-2 box-border mix-blend-multiply whitespace-nowrap">
                      <div className="self-stretch relative text-xs leading-[18px] font-medium font-text-sm-semibold text-primary-700 text-center">
                        10/20 seats
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch relative text-sm leading-[20px] font-text-sm-semibold text-gray-600 text-left">
                    Manage your space’s members and their account details here.
                  </div>
                </div>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start gap-[12px]">
                  <div className="h-10 rounded-xl overflow-hidden hidden flex-row items-center justify-center py-3 px-4 box-border gap-[8px]">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                      alt=""
                    />
                    <div className="self-stretch relative text-xs leading-[16px] font-semibold font-text-sm-semibold text-brand-brand-primary text-left">
                      Tertiary
                    </div>
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                      alt=""
                    />
                  </div>
                  <div className="h-10 rounded-xl shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border overflow-hidden hidden flex-row items-center justify-center py-3 px-[15px] gap-[8px] border-[1px] border-solid border-brand-brand-primary">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                      alt=""
                    />
                    <div className="self-stretch relative text-xs leading-[16px] font-semibold font-text-sm-semibold text-brand-brand-primary text-left">
                      Secondary
                    </div>
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                      alt=""
                    />
                  </div>
                  <div className="rounded-xl bg-brand-brand-primary shadow-[0px_6px_30px_rgba(42,_55,_119,_0.06)] overflow-hidden flex flex-row items-center justify-center py-3 px-[15px] gap-[8px]">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                      src="/plus.svg"
                    />
                    <div className="relative text-xs leading-[16px] font-semibold font-text-sm-semibold text-base-white text-left">
                      Add Member
                    </div>
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                      alt=""
                    />
                  </div>
                </button>
              </div>
              <img
                className="self-stretch relative max-w-full overflow-hidden max-h-full"
                loading="eager"
                alt=""
                src="/divider.svg"
              />
            </div>
            <div className="self-stretch bg-base-white box-border flex flex-col items-start justify-start top-[0] z-[99] sticky max-w-full border-b-[1px] border-solid border-gray-200">
              <div className="self-stretch rounded-xl flex flex-row items-center justify-between p-4 box-border gap-[20px] max-w-full">
                <div className="rounded-lg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-start justify-start border-[1px] border-solid border-gray-300 mq750:hidden">
                  <button className="cursor-pointer [border:none] py-2.5 px-3.5 bg-gray-50 flex flex-row items-center justify-center whitespace-nowrap border-r-[1px] border-solid border-gray-300 hover:bg-gainsboro-200">
                    <div className="relative text-sm leading-[20px] font-semibold font-text-sm-semibold text-gray-800 text-left">
                      All Members
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-2.5 px-[15px] bg-base-white w-[76.5px] box-border flex flex-row items-center justify-center border-r-[1px] border-solid border-gray-300 hover:bg-gainsboro-100">
                    <div className="relative text-sm leading-[20px] font-semibold font-text-sm-semibold text-gray-700 text-left">
                      Active
                    </div>
                  </button>
                  <div className="self-stretch bg-base-white hidden flex-row items-center justify-center py-2.5 px-4 z-[6] border-r-[1px] border-solid border-gray-300">
                    <div className="self-stretch relative text-sm leading-[20px] font-semibold font-text-sm-semibold text-gray-700 text-left">
                      Text
                    </div>
                  </div>
                  <div className="self-stretch bg-base-white hidden flex-row items-center justify-center py-2.5 px-4 z-[5] border-r-[1px] border-solid border-gray-300">
                    <div className="self-stretch relative text-sm leading-[20px] font-semibold font-text-sm-semibold text-gray-700 text-left">
                      Text
                    </div>
                  </div>
                  <div className="self-stretch bg-base-white hidden flex-row items-center justify-center py-2.5 px-4 z-[4] border-r-[1px] border-solid border-gray-300">
                    <div className="self-stretch relative text-sm leading-[20px] font-semibold font-text-sm-semibold text-gray-700 text-left">
                      Text
                    </div>
                  </div>
                  <div className="self-stretch bg-base-white hidden flex-row items-center justify-center py-2.5 px-4 z-[3] border-r-[1px] border-solid border-gray-300">
                    <div className="self-stretch relative text-sm leading-[20px] font-semibold font-text-sm-semibold text-gray-700 text-left">
                      Text
                    </div>
                  </div>
                  <div className="self-stretch bg-base-white hidden flex-row items-center justify-center py-2.5 px-4 z-[2] border-r-[1px] border-solid border-gray-300">
                    <div className="self-stretch relative text-sm leading-[20px] font-semibold font-text-sm-semibold text-gray-700 text-left">
                      Text
                    </div>
                  </div>
                  <div className="self-stretch bg-base-white hidden flex-row items-center justify-center py-2.5 px-4 z-[1] border-r-[1px] border-solid border-gray-300">
                    <div className="self-stretch relative text-sm leading-[20px] font-semibold font-text-sm-semibold text-gray-700 text-left">
                      Text
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] py-2.5 px-[15px] bg-base-white w-[86.5px] box-border flex flex-row items-center justify-center border-r-[1px] border-solid border-gray-300 hover:bg-gainsboro-100">
                    <div className="relative text-sm leading-[20px] font-semibold font-text-sm-semibold text-gray-700 text-left">
                      Inactive
                    </div>
                  </button>
                </div>
                <div className="w-[360px] flex flex-row items-center justify-start max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[6px] max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                      <div className="w-[95px] relative text-sm leading-[24px] font-medium font-text-sm-semibold text-typography-body text-left hidden">
                        Email Address
                      </div>
                      <div className="self-stretch rounded-xl bg-secondary-50 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-start py-2.5 px-4 gap-[8px]">
                        <img
                          className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                        <input
                          className="w-[calc(100%_-_52px)] [border:none] [outline:none] bg-[transparent] h-6 flex-1 flex flex-row items-center justify-start font-text-sm-semibold font-medium text-sm text-slategray min-w-[150px]"
                          placeholder="Search"
                          type="text"
                        />
                        <img
                          className="h-5 w-5 relative overflow-hidden shrink-0"
                          alt=""
                          src="/searchmd.svg"
                        />
                      </div>
                    </div>
                    <div className="self-stretch h-6 relative text-sm leading-[24px] font-text-sm-semibold text-gray-600 text-left hidden whitespace-nowrap">
                      This is a hint text to help user.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[292px] box-border h-[72px] hidden flex-row items-center justify-start py-4 pr-[43px] pl-6 gap-[12px] border-b-[1px] border-solid border-gray-200">
              <div className="flex flex-row items-center justify-center">
                <div className="h-5 w-5 relative rounded-md bg-base-white box-border overflow-hidden shrink-0 border-[1px] border-solid border-gray-300" />
              </div>
              <img
                className="h-10 w-10 rounded-181xl object-cover min-h-[40px]"
                alt=""
                src="/avatar-1@2x.png"
              />
              <div className="self-stretch flex-1 flex flex-col items-start justify-start">
                <div className="flex-1 relative text-sm leading-[20px] font-medium font-text-sm-semibold text-gray-900 text-left">
                  Kate Morrison
                </div>
                <div className="self-stretch flex-1 relative text-sm leading-[20px] font-text-sm-semibold text-gray-600 text-left">
                  @kate
                </div>
              </div>
            </div>
            <div className="w-[120px] h-[764px] hidden flex-col items-start justify-start">
              <div className="self-stretch h-11 bg-gray-50 box-border flex flex-row items-center justify-start py-3 px-6 border-b-[1px] border-solid border-gray-200">
                <div className="h-[18px] flex flex-row items-center justify-start gap-[4px]">
                  <div className="self-stretch relative text-xs leading-[18px] font-medium font-text-sm-semibold text-gray-600 text-left">
                    Email Address
                  </div>
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0"
                    alt=""
                  />
                </div>
              </div>
              <div className="self-stretch h-[72px] box-border flex flex-row items-center justify-start py-4 pr-[33px] pl-6 border-b-[1px] border-solid border-gray-200">
                <div className="h-[22px] flex-1 rounded-2xl bg-success-50 flex flex-row items-center justify-start py-0.5 pr-2 pl-1.5 box-border gap-[4px] mix-blend-multiply">
                  <img
                    className="h-2 w-2 relative overflow-hidden shrink-0"
                    alt=""
                  />
                  <div className="self-stretch flex-1 relative text-xs leading-[18px] font-medium font-text-sm-semibold text-success-700 text-center">
                    Active
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[72px] box-border flex flex-row items-center justify-start py-4 pr-[33px] pl-6 border-b-[1px] border-solid border-gray-200">
                <div className="h-[22px] flex-1 rounded-2xl bg-success-50 flex flex-row items-center justify-start py-0.5 pr-2 pl-1.5 box-border gap-[4px] mix-blend-multiply">
                  <img
                    className="h-2 w-2 relative overflow-hidden shrink-0"
                    alt=""
                  />
                  <div className="self-stretch flex-1 relative text-xs leading-[18px] font-medium font-text-sm-semibold text-success-700 text-center">
                    Active
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[72px] box-border flex flex-row items-center justify-start py-4 pr-[33px] pl-6 border-b-[1px] border-solid border-gray-200">
                <div className="h-[22px] flex-1 rounded-2xl bg-success-50 flex flex-row items-center justify-start py-0.5 pr-2 pl-1.5 box-border gap-[4px] mix-blend-multiply">
                  <img
                    className="h-2 w-2 relative overflow-hidden shrink-0"
                    alt=""
                  />
                  <div className="self-stretch flex-1 relative text-xs leading-[18px] font-medium font-text-sm-semibold text-success-700 text-center">
                    Active
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[72px] box-border flex flex-row items-center justify-start py-4 pr-[33px] pl-6 border-b-[1px] border-solid border-gray-200">
                <div className="h-[22px] flex-1 rounded-2xl bg-success-50 flex flex-row items-center justify-start py-0.5 pr-2 pl-1.5 box-border gap-[4px] mix-blend-multiply">
                  <img
                    className="h-2 w-2 relative overflow-hidden shrink-0"
                    alt=""
                  />
                  <div className="self-stretch flex-1 relative text-xs leading-[18px] font-medium font-text-sm-semibold text-success-700 text-center">
                    Active
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[72px] box-border flex flex-row items-center justify-start py-4 pr-[33px] pl-6 border-b-[1px] border-solid border-gray-200">
                <div className="h-[22px] flex-1 rounded-2xl bg-success-50 flex flex-row items-center justify-start py-0.5 pr-2 pl-1.5 box-border gap-[4px] mix-blend-multiply">
                  <img
                    className="h-2 w-2 relative overflow-hidden shrink-0"
                    alt=""
                  />
                  <div className="self-stretch flex-1 relative text-xs leading-[18px] font-medium font-text-sm-semibold text-success-700 text-center">
                    Active
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[72px] box-border flex flex-row items-center justify-start py-4 pr-[33px] pl-6 border-b-[1px] border-solid border-gray-200">
                <div className="h-[22px] flex-1 rounded-2xl bg-success-50 flex flex-row items-center justify-start py-0.5 pr-2 pl-1.5 box-border gap-[4px] mix-blend-multiply">
                  <img
                    className="h-2 w-2 relative overflow-hidden shrink-0"
                    alt=""
                  />
                  <div className="self-stretch flex-1 relative text-xs leading-[18px] font-medium font-text-sm-semibold text-success-700 text-center">
                    Active
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[72px] box-border flex flex-row items-center justify-start py-4 pr-[33px] pl-6 border-b-[1px] border-solid border-gray-200">
                <div className="h-[22px] flex-1 rounded-2xl bg-success-50 flex flex-row items-center justify-start py-0.5 pr-2 pl-1.5 box-border gap-[4px] mix-blend-multiply">
                  <img
                    className="h-2 w-2 relative overflow-hidden shrink-0"
                    alt=""
                  />
                  <div className="self-stretch flex-1 relative text-xs leading-[18px] font-medium font-text-sm-semibold text-success-700 text-center">
                    Active
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[72px] box-border flex flex-row items-center justify-start py-4 pr-[33px] pl-6 border-b-[1px] border-solid border-gray-200">
                <div className="h-[22px] flex-1 rounded-2xl bg-success-50 flex flex-row items-center justify-start py-0.5 pr-2 pl-1.5 box-border gap-[4px] mix-blend-multiply">
                  <img
                    className="h-2 w-2 relative overflow-hidden shrink-0"
                    alt=""
                  />
                  <div className="self-stretch flex-1 relative text-xs leading-[18px] font-medium font-text-sm-semibold text-success-700 text-center">
                    Active
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[72px] box-border flex flex-row items-center justify-start py-4 pr-[33px] pl-6 border-b-[1px] border-solid border-gray-200">
                <div className="h-[22px] flex-1 rounded-2xl bg-success-50 flex flex-row items-center justify-start py-0.5 pr-2 pl-1.5 box-border gap-[4px] mix-blend-multiply">
                  <img
                    className="h-2 w-2 relative overflow-hidden shrink-0"
                    alt=""
                  />
                  <div className="self-stretch flex-1 relative text-xs leading-[18px] font-medium font-text-sm-semibold text-success-700 text-center">
                    Active
                  </div>
                </div>
              </div>
              <div className="self-stretch box-border h-[72px] hidden flex-row items-center justify-start py-4 pr-[43px] pl-6 border-b-[1px] border-solid border-gray-200">
                <div className="h-[22px] flex-1 rounded-2xl bg-success-50 flex flex-row items-center justify-start py-0.5 pr-[3px] pl-1.5 box-border gap-[4px] mix-blend-multiply">
                  <img
                    className="h-2 w-2 relative overflow-hidden shrink-0"
                    alt=""
                  />
                  <div className="self-stretch flex-1 relative text-xs leading-[18px] font-medium font-text-sm-semibold text-success-700 text-center">
                    Active
                  </div>
                </div>
              </div>
            </div>
            <div className="w-56 box-border h-[72px] hidden flex-row items-center justify-start py-4 px-6 border-b-[1px] border-solid border-gray-200">
              <div className="h-5 relative text-sm leading-[20px] font-text-sm-semibold text-gray-600 text-left inline-block whitespace-nowrap">
                kate@untitledui.com
              </div>
            </div>
            <div className="w-72 h-[764px] hidden flex-col items-start justify-start">
              <div className="self-stretch h-11 bg-gray-50 box-border flex flex-row items-center justify-start py-3 px-6 border-b-[1px] border-solid border-gray-200">
                <div className="h-[18px] flex flex-row items-center justify-start">
                  <div className="self-stretch relative text-xs leading-[18px] font-medium font-text-sm-semibold text-gray-600 text-left">
                    Teams
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[72px] box-border flex flex-row items-center justify-start py-4 pr-7 pl-6 border-b-[1px] border-solid border-gray-200">
                <div className="h-[22px] flex-1 flex flex-row items-start justify-start gap-[4px]">
                  <div className="rounded-2xl bg-primary-50 flex flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] relative text-xs leading-[18px] font-medium font-text-sm-semibold text-primary-700 text-center inline-block whitespace-nowrap">
                      Design
                    </div>
                  </div>
                  <div className="rounded-2xl bg-blue-50 flex flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] relative text-xs leading-[18px] font-medium font-text-sm-semibold text-blue-700 text-center inline-block whitespace-nowrap">
                      Product
                    </div>
                  </div>
                  <div className="flex-1 rounded-2xl bg-indigo-50 flex flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] flex-1 relative text-xs leading-[18px] font-medium font-text-sm-semibold text-indigo-700 text-center inline-block whitespace-nowrap">
                      Marketing
                    </div>
                  </div>
                  <div className="rounded-2xl bg-pink-50 hidden flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] relative text-xs leading-[18px] font-medium font-text-sm-semibold text-pink-700 text-center inline-block whitespace-nowrap">
                      Label
                    </div>
                  </div>
                  <div className="rounded-2xl bg-orange-dark-50 hidden flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] relative text-xs leading-[18px] font-medium font-text-sm-semibold text-orange-700 text-center inline-block whitespace-nowrap">
                      Label
                    </div>
                  </div>
                  <div className="self-stretch rounded-2xl bg-gray-100 flex flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="self-stretch relative text-xs leading-[18px] font-medium font-text-sm-semibold text-gray-700 text-center whitespace-nowrap">
                      +4
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[72px] box-border flex flex-row items-center justify-start py-4 pr-7 pl-6 border-b-[1px] border-solid border-gray-200">
                <div className="h-[22px] flex-1 flex flex-row items-start justify-start gap-[4px]">
                  <div className="rounded-2xl bg-primary-50 flex flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] relative text-xs leading-[18px] font-medium font-text-sm-semibold text-primary-700 text-center inline-block whitespace-nowrap">
                      Design
                    </div>
                  </div>
                  <div className="rounded-2xl bg-blue-50 flex flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] relative text-xs leading-[18px] font-medium font-text-sm-semibold text-blue-700 text-center inline-block whitespace-nowrap">
                      Product
                    </div>
                  </div>
                  <div className="flex-1 rounded-2xl bg-indigo-50 flex flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] flex-1 relative text-xs leading-[18px] font-medium font-text-sm-semibold text-indigo-700 text-center inline-block whitespace-nowrap">
                      Marketing
                    </div>
                  </div>
                  <div className="rounded-2xl bg-pink-50 hidden flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] relative text-xs leading-[18px] font-medium font-text-sm-semibold text-pink-700 text-center inline-block whitespace-nowrap">
                      Label
                    </div>
                  </div>
                  <div className="rounded-2xl bg-orange-dark-50 hidden flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] relative text-xs leading-[18px] font-medium font-text-sm-semibold text-orange-700 text-center inline-block whitespace-nowrap">
                      Label
                    </div>
                  </div>
                  <div className="self-stretch rounded-2xl bg-gray-100 flex flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="self-stretch relative text-xs leading-[18px] font-medium font-text-sm-semibold text-gray-700 text-center whitespace-nowrap">
                      +4
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[72px] box-border flex flex-row items-center justify-start py-4 pr-7 pl-6 border-b-[1px] border-solid border-gray-200">
                <div className="h-[22px] flex-1 flex flex-row items-start justify-start gap-[4px]">
                  <div className="rounded-2xl bg-primary-50 flex flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] relative text-xs leading-[18px] font-medium font-text-sm-semibold text-primary-700 text-center inline-block whitespace-nowrap">
                      Design
                    </div>
                  </div>
                  <div className="rounded-2xl bg-blue-50 flex flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] relative text-xs leading-[18px] font-medium font-text-sm-semibold text-blue-700 text-center inline-block whitespace-nowrap">
                      Product
                    </div>
                  </div>
                  <div className="flex-1 rounded-2xl bg-indigo-50 flex flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] flex-1 relative text-xs leading-[18px] font-medium font-text-sm-semibold text-indigo-700 text-center inline-block whitespace-nowrap">
                      Marketing
                    </div>
                  </div>
                  <div className="rounded-2xl bg-pink-50 hidden flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] relative text-xs leading-[18px] font-medium font-text-sm-semibold text-pink-700 text-center inline-block whitespace-nowrap">
                      Label
                    </div>
                  </div>
                  <div className="rounded-2xl bg-orange-dark-50 hidden flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] relative text-xs leading-[18px] font-medium font-text-sm-semibold text-orange-700 text-center inline-block whitespace-nowrap">
                      Label
                    </div>
                  </div>
                  <div className="self-stretch rounded-2xl bg-gray-100 flex flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="self-stretch relative text-xs leading-[18px] font-medium font-text-sm-semibold text-gray-700 text-center whitespace-nowrap">
                      +4
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[72px] box-border flex flex-row items-center justify-start py-4 pr-7 pl-6 border-b-[1px] border-solid border-gray-200">
                <div className="h-[22px] flex-1 flex flex-row items-start justify-start gap-[4px]">
                  <div className="rounded-2xl bg-primary-50 flex flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] relative text-xs leading-[18px] font-medium font-text-sm-semibold text-primary-700 text-center inline-block whitespace-nowrap">
                      Design
                    </div>
                  </div>
                  <div className="rounded-2xl bg-blue-50 flex flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] relative text-xs leading-[18px] font-medium font-text-sm-semibold text-blue-700 text-center inline-block whitespace-nowrap">
                      Product
                    </div>
                  </div>
                  <div className="flex-1 rounded-2xl bg-indigo-50 flex flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] flex-1 relative text-xs leading-[18px] font-medium font-text-sm-semibold text-indigo-700 text-center inline-block whitespace-nowrap">
                      Marketing
                    </div>
                  </div>
                  <div className="rounded-2xl bg-pink-50 hidden flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] relative text-xs leading-[18px] font-medium font-text-sm-semibold text-pink-700 text-center inline-block whitespace-nowrap">
                      Label
                    </div>
                  </div>
                  <div className="rounded-2xl bg-orange-dark-50 hidden flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] relative text-xs leading-[18px] font-medium font-text-sm-semibold text-orange-700 text-center inline-block whitespace-nowrap">
                      Label
                    </div>
                  </div>
                  <div className="self-stretch rounded-2xl bg-gray-100 flex flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="self-stretch relative text-xs leading-[18px] font-medium font-text-sm-semibold text-gray-700 text-center whitespace-nowrap">
                      +4
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[72px] box-border flex flex-row items-center justify-start py-4 pr-7 pl-6 border-b-[1px] border-solid border-gray-200">
                <div className="h-[22px] flex-1 flex flex-row items-start justify-start gap-[4px]">
                  <div className="rounded-2xl bg-primary-50 flex flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] relative text-xs leading-[18px] font-medium font-text-sm-semibold text-primary-700 text-center inline-block whitespace-nowrap">
                      Design
                    </div>
                  </div>
                  <div className="rounded-2xl bg-blue-50 flex flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] relative text-xs leading-[18px] font-medium font-text-sm-semibold text-blue-700 text-center inline-block whitespace-nowrap">
                      Product
                    </div>
                  </div>
                  <div className="flex-1 rounded-2xl bg-indigo-50 flex flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] flex-1 relative text-xs leading-[18px] font-medium font-text-sm-semibold text-indigo-700 text-center inline-block whitespace-nowrap">
                      Marketing
                    </div>
                  </div>
                  <div className="rounded-2xl bg-pink-50 hidden flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] relative text-xs leading-[18px] font-medium font-text-sm-semibold text-pink-700 text-center inline-block whitespace-nowrap">
                      Label
                    </div>
                  </div>
                  <div className="rounded-2xl bg-orange-dark-50 hidden flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] relative text-xs leading-[18px] font-medium font-text-sm-semibold text-orange-700 text-center inline-block whitespace-nowrap">
                      Label
                    </div>
                  </div>
                  <div className="self-stretch rounded-2xl bg-gray-100 flex flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="self-stretch relative text-xs leading-[18px] font-medium font-text-sm-semibold text-gray-700 text-center whitespace-nowrap">
                      +4
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[72px] box-border flex flex-row items-center justify-start py-4 pr-7 pl-6 border-b-[1px] border-solid border-gray-200">
                <div className="h-[22px] flex-1 flex flex-row items-start justify-start gap-[4px]">
                  <div className="rounded-2xl bg-primary-50 flex flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] relative text-xs leading-[18px] font-medium font-text-sm-semibold text-primary-700 text-center inline-block whitespace-nowrap">
                      Design
                    </div>
                  </div>
                  <div className="rounded-2xl bg-blue-50 flex flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] relative text-xs leading-[18px] font-medium font-text-sm-semibold text-blue-700 text-center inline-block whitespace-nowrap">
                      Product
                    </div>
                  </div>
                  <div className="flex-1 rounded-2xl bg-indigo-50 flex flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] flex-1 relative text-xs leading-[18px] font-medium font-text-sm-semibold text-indigo-700 text-center inline-block whitespace-nowrap">
                      Marketing
                    </div>
                  </div>
                  <div className="rounded-2xl bg-pink-50 hidden flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] relative text-xs leading-[18px] font-medium font-text-sm-semibold text-pink-700 text-center inline-block whitespace-nowrap">
                      Label
                    </div>
                  </div>
                  <div className="rounded-2xl bg-orange-dark-50 hidden flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] relative text-xs leading-[18px] font-medium font-text-sm-semibold text-orange-700 text-center inline-block whitespace-nowrap">
                      Label
                    </div>
                  </div>
                  <div className="self-stretch rounded-2xl bg-gray-100 flex flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="self-stretch relative text-xs leading-[18px] font-medium font-text-sm-semibold text-gray-700 text-center whitespace-nowrap">
                      +4
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[72px] box-border flex flex-row items-center justify-start py-4 pr-7 pl-6 border-b-[1px] border-solid border-gray-200">
                <div className="h-[22px] flex-1 flex flex-row items-start justify-start gap-[4px]">
                  <div className="rounded-2xl bg-primary-50 flex flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] relative text-xs leading-[18px] font-medium font-text-sm-semibold text-primary-700 text-center inline-block whitespace-nowrap">
                      Design
                    </div>
                  </div>
                  <div className="rounded-2xl bg-blue-50 flex flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] relative text-xs leading-[18px] font-medium font-text-sm-semibold text-blue-700 text-center inline-block whitespace-nowrap">
                      Product
                    </div>
                  </div>
                  <div className="flex-1 rounded-2xl bg-indigo-50 flex flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] flex-1 relative text-xs leading-[18px] font-medium font-text-sm-semibold text-indigo-700 text-center inline-block whitespace-nowrap">
                      Marketing
                    </div>
                  </div>
                  <div className="rounded-2xl bg-pink-50 hidden flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] relative text-xs leading-[18px] font-medium font-text-sm-semibold text-pink-700 text-center inline-block whitespace-nowrap">
                      Label
                    </div>
                  </div>
                  <div className="rounded-2xl bg-orange-dark-50 hidden flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] relative text-xs leading-[18px] font-medium font-text-sm-semibold text-orange-700 text-center inline-block whitespace-nowrap">
                      Label
                    </div>
                  </div>
                  <div className="self-stretch rounded-2xl bg-gray-100 flex flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="self-stretch relative text-xs leading-[18px] font-medium font-text-sm-semibold text-gray-700 text-center whitespace-nowrap">
                      +4
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[72px] box-border flex flex-row items-center justify-start py-4 pr-7 pl-6 border-b-[1px] border-solid border-gray-200">
                <div className="h-[22px] flex-1 flex flex-row items-start justify-start gap-[4px]">
                  <div className="rounded-2xl bg-primary-50 flex flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] relative text-xs leading-[18px] font-medium font-text-sm-semibold text-primary-700 text-center inline-block whitespace-nowrap">
                      Design
                    </div>
                  </div>
                  <div className="rounded-2xl bg-blue-50 flex flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] relative text-xs leading-[18px] font-medium font-text-sm-semibold text-blue-700 text-center inline-block whitespace-nowrap">
                      Product
                    </div>
                  </div>
                  <div className="flex-1 rounded-2xl bg-indigo-50 flex flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] flex-1 relative text-xs leading-[18px] font-medium font-text-sm-semibold text-indigo-700 text-center inline-block whitespace-nowrap">
                      Marketing
                    </div>
                  </div>
                  <div className="rounded-2xl bg-pink-50 hidden flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] relative text-xs leading-[18px] font-medium font-text-sm-semibold text-pink-700 text-center inline-block whitespace-nowrap">
                      Label
                    </div>
                  </div>
                  <div className="rounded-2xl bg-orange-dark-50 hidden flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] relative text-xs leading-[18px] font-medium font-text-sm-semibold text-orange-700 text-center inline-block whitespace-nowrap">
                      Label
                    </div>
                  </div>
                  <div className="self-stretch rounded-2xl bg-gray-100 flex flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="self-stretch relative text-xs leading-[18px] font-medium font-text-sm-semibold text-gray-700 text-center whitespace-nowrap">
                      +4
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[72px] box-border flex flex-row items-center justify-start py-4 pr-7 pl-6 border-b-[1px] border-solid border-gray-200">
                <div className="h-[22px] flex-1 flex flex-row items-start justify-start gap-[4px]">
                  <div className="rounded-2xl bg-primary-50 flex flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] relative text-xs leading-[18px] font-medium font-text-sm-semibold text-primary-700 text-center inline-block whitespace-nowrap">
                      Design
                    </div>
                  </div>
                  <div className="rounded-2xl bg-blue-50 flex flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] relative text-xs leading-[18px] font-medium font-text-sm-semibold text-blue-700 text-center inline-block whitespace-nowrap">
                      Product
                    </div>
                  </div>
                  <div className="flex-1 rounded-2xl bg-indigo-50 flex flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] flex-1 relative text-xs leading-[18px] font-medium font-text-sm-semibold text-indigo-700 text-center inline-block whitespace-nowrap">
                      Marketing
                    </div>
                  </div>
                  <div className="rounded-2xl bg-pink-50 hidden flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] relative text-xs leading-[18px] font-medium font-text-sm-semibold text-pink-700 text-center inline-block whitespace-nowrap">
                      Label
                    </div>
                  </div>
                  <div className="rounded-2xl bg-orange-dark-50 hidden flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] relative text-xs leading-[18px] font-medium font-text-sm-semibold text-orange-700 text-center inline-block whitespace-nowrap">
                      Label
                    </div>
                  </div>
                  <div className="self-stretch rounded-2xl bg-gray-100 flex flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="self-stretch relative text-xs leading-[18px] font-medium font-text-sm-semibold text-gray-700 text-center whitespace-nowrap">
                      +4
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch box-border h-[72px] hidden flex-row items-center justify-start py-4 px-6 border-b-[1px] border-solid border-gray-200">
                <div className="h-[22px] flex flex-row items-start justify-start gap-[4px]">
                  <div className="rounded-2xl bg-primary-50 flex flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] relative text-xs leading-[18px] font-medium font-text-sm-semibold text-primary-700 text-center inline-block whitespace-nowrap">
                      Design
                    </div>
                  </div>
                  <div className="rounded-2xl bg-blue-50 flex flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] relative text-xs leading-[18px] font-medium font-text-sm-semibold text-blue-700 text-center inline-block whitespace-nowrap">
                      Product
                    </div>
                  </div>
                  <div className="rounded-2xl bg-indigo-50 flex flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] relative text-xs leading-[18px] font-medium font-text-sm-semibold text-indigo-700 text-center inline-block whitespace-nowrap">
                      Marketing
                    </div>
                  </div>
                  <div className="rounded-2xl bg-pink-50 hidden flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] relative text-xs leading-[18px] font-medium font-text-sm-semibold text-pink-700 text-center inline-block whitespace-nowrap">
                      Label
                    </div>
                  </div>
                  <div className="rounded-2xl bg-orange-dark-50 hidden flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="h-[18px] relative text-xs leading-[18px] font-medium font-text-sm-semibold text-orange-700 text-center inline-block whitespace-nowrap">
                      Label
                    </div>
                  </div>
                  <div className="self-stretch rounded-2xl bg-gray-100 flex flex-row items-center justify-start py-0.5 px-2 mix-blend-multiply">
                    <div className="self-stretch relative text-xs leading-[18px] font-medium font-text-sm-semibold text-gray-700 text-center whitespace-nowrap">
                      +4
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] max-w-full mq1025:flex-wrap mq1025:pl-5 mq1025:pr-5 mq1025:box-border">
              <div className="flex-1 flex flex-row items-start justify-start min-w-[507px] [row-gap:20px] max-w-full mq750:flex-wrap mq750:min-w-full">
                <div className="flex-1 flex flex-col items-start justify-start min-w-[361px] max-w-full mq450:min-w-full">
                  <div className="self-stretch bg-gray-50 flex flex-row items-center justify-start py-4 px-6 gap-[12px] border-b-[1px] border-solid border-gray-200">
                    <input className="m-0 h-5 w-5" type="checkbox" />
                    <input
                      className="w-10 [border:none] [outline:none] bg-[transparent] h-[18px] flex flex-row items-center justify-center font-text-sm-semibold font-medium text-sm text-gray-600"
                      placeholder="Name"
                      type="text"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start py-4 px-6 gap-[12px] border-b-[1px] border-solid border-gray-200 mq450:flex-wrap">
                    <input className="m-0 h-5 w-5" type="checkbox" />
                    <img
                      className="h-10 w-10 rounded-181xl object-cover"
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <div className="relative text-sm leading-[20px] font-medium font-text-sm-semibold text-gray-900 text-left">
                      Olivia Rhye
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start py-4 px-6 gap-[12px] border-b-[1px] border-solid border-gray-200 mq450:flex-wrap">
                    <input className="m-0 h-5 w-5" type="checkbox" />
                    <img
                      className="h-10 w-10 rounded-181xl object-cover"
                      alt=""
                      src="/avatar-3@2x.png"
                    />
                    <div className="relative text-sm leading-[20px] font-medium font-text-sm-semibold text-gray-900 text-left">
                      Phoenix Baker
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start py-4 px-6 gap-[12px] border-b-[1px] border-solid border-gray-200 mq450:flex-wrap">
                    <input className="m-0 h-5 w-5" type="checkbox" />
                    <img
                      className="h-10 w-10 rounded-181xl object-cover"
                      alt=""
                      src="/avatar-4@2x.png"
                    />
                    <div className="relative text-sm leading-[20px] font-medium font-text-sm-semibold text-gray-900 text-left">
                      Lana Steiner
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start py-4 px-6 gap-[12px] border-b-[1px] border-solid border-gray-200 mq450:flex-wrap">
                    <input className="m-0 h-5 w-5" type="checkbox" />
                    <img
                      className="h-10 w-10 rounded-181xl object-cover"
                      alt=""
                      src="/avatar-5@2x.png"
                    />
                    <div className="relative text-sm leading-[20px] font-medium font-text-sm-semibold text-gray-900 text-left">
                      Demi Wilkinson
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start py-4 px-6 gap-[12px] border-b-[1px] border-solid border-gray-200 mq450:flex-wrap">
                    <input className="m-0 h-5 w-5" type="checkbox" />
                    <img
                      className="h-10 w-10 rounded-181xl object-cover"
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <div className="relative text-sm leading-[20px] font-medium font-text-sm-semibold text-gray-900 text-left">
                      Candice Wu
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start py-4 px-6 gap-[12px] border-b-[1px] border-solid border-gray-200 mq450:flex-wrap">
                    <input className="m-0 h-5 w-5" type="checkbox" />
                    <img
                      className="h-10 w-10 rounded-181xl object-cover"
                      alt=""
                      src="/avatar-7@2x.png"
                    />
                    <div className="relative text-sm leading-[20px] font-medium font-text-sm-semibold text-gray-900 text-left">
                      Natali Craig
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start py-4 px-6 gap-[12px] border-b-[1px] border-solid border-gray-200 mq450:flex-wrap">
                    <input className="m-0 h-5 w-5" type="checkbox" />
                    <img
                      className="h-10 w-10 rounded-181xl object-cover"
                      alt=""
                      src="/avatar-8@2x.png"
                    />
                    <div className="relative text-sm leading-[20px] font-medium font-text-sm-semibold text-gray-900 text-left">
                      Drew Cano
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start py-4 px-6 gap-[12px] border-b-[1px] border-solid border-gray-200 mq450:flex-wrap">
                    <input className="m-0 h-5 w-5" type="checkbox" />
                    <img
                      className="h-10 w-10 rounded-181xl object-cover"
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <div className="relative text-sm leading-[20px] font-medium font-text-sm-semibold text-gray-900 text-left">
                      Orlando Diggs
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start py-4 px-6 gap-[12px] z-[1] border-b-[1px] border-solid border-gray-200 mq450:flex-wrap">
                    <input className="m-0 h-5 w-5" type="checkbox" />
                    <img
                      className="h-10 w-10 rounded-181xl object-cover"
                      alt=""
                      src="/avatar-10@2x.png"
                    />
                    <div className="relative text-sm leading-[20px] font-medium font-text-sm-semibold text-gray-900 text-left">
                      Andi Lane
                    </div>
                  </div>
                </div>
                <div className="w-56 flex flex-col items-start justify-start min-w-[224px] mq750:flex-1">
                  <button className="cursor-pointer [border:none] py-4 pr-[54px] pl-6 bg-gray-50 flex flex-row items-center justify-start gap-[12px] z-[1] border-b-[1px] border-solid border-gray-200">
                    <input className="m-0 h-5 w-5" type="checkbox" />
                    <div className="flex flex-row items-center justify-start gap-[1px]">
                      <div className="relative text-sm leading-[18px] font-medium font-text-sm-semibold text-gray-600 text-left">
                        Email address
                      </div>
                      <img
                        className="h-4 w-4 relative overflow-hidden shrink-0"
                        alt=""
                        src="/arrowdown-1.svg"
                      />
                    </div>
                  </button>
                  <div className="self-stretch flex flex-row items-center justify-start py-[26px] px-6 z-[2] border-b-[1px] border-solid border-gray-200">
                    <div className="relative text-sm leading-[20px] font-text-sm-semibold text-gray-600 text-left whitespace-nowrap">
                      olivia@gmail.com
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start py-[26px] px-6 z-[3] border-b-[1px] border-solid border-gray-200">
                    <div className="relative text-sm leading-[20px] font-text-sm-semibold text-gray-600 text-left whitespace-nowrap">
                      phoenix@gmail.com
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start py-[26px] px-6 z-[4] border-b-[1px] border-solid border-gray-200">
                    <div className="relative text-sm leading-[20px] font-text-sm-semibold text-gray-600 text-left whitespace-nowrap">
                      lana@gmail.com
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start py-[26px] px-6 z-[5] border-b-[1px] border-solid border-gray-200">
                    <div className="relative text-sm leading-[20px] font-text-sm-semibold text-gray-600 text-left whitespace-nowrap">
                      demi@gmail.com
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start py-[26px] px-6 z-[6] border-b-[1px] border-solid border-gray-200">
                    <div className="relative text-sm leading-[20px] font-text-sm-semibold text-gray-600 text-left whitespace-nowrap">
                      candice@gmail.com
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start py-[26px] px-6 z-[7] border-b-[1px] border-solid border-gray-200">
                    <div className="relative text-sm leading-[20px] font-text-sm-semibold text-gray-600 text-left whitespace-nowrap">
                      natali@gmail.com
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start py-[26px] px-6 z-[8] border-b-[1px] border-solid border-gray-200">
                    <div className="relative text-sm leading-[20px] font-text-sm-semibold text-gray-600 text-left whitespace-nowrap">
                      drew@gmail.com
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start py-[26px] px-6 z-[9] border-b-[1px] border-solid border-gray-200">
                    <div className="relative text-sm leading-[20px] font-text-sm-semibold text-gray-600 text-left whitespace-nowrap">
                      orlando@gmail.com
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start py-[26px] px-6 z-[10] border-b-[1px] border-solid border-gray-200">
                    <div className="relative text-sm leading-[20px] font-text-sm-semibold text-gray-600 text-left whitespace-nowrap">
                      andi@gmail.com
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[700px] w-[200px] flex flex-col items-start justify-start z-[11]">
                <div className="self-stretch bg-gray-50 flex flex-row items-center justify-start py-[17px] px-6 border-b-[1px] border-solid border-gray-200">
                  <div className="flex flex-row items-center justify-start">
                    <div className="relative text-sm leading-[18px] font-medium font-text-sm-semibold text-gray-600 text-left">
                      Phone Number
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-center justify-start py-4 px-6 border-b-[1px] border-solid border-gray-200">
                  <div className="relative text-sm leading-[20px] font-text-sm-semibold text-gray-600 text-left">
                    (205) 555-0100
                  </div>
                </div>
                <div className="self-stretch h-[72px] box-border flex flex-row items-center justify-start py-4 px-6 border-b-[1px] border-solid border-gray-200">
                  <div className="relative text-sm leading-[20px] font-text-sm-semibold text-gray-600 text-left">
                    (629) 555-0129
                  </div>
                </div>
                <div className="self-stretch h-[72px] box-border flex flex-row items-center justify-start py-4 px-6 border-b-[1px] border-solid border-gray-200">
                  <div className="relative text-sm leading-[20px] font-text-sm-semibold text-gray-600 text-left">
                    (217) 555-0113
                  </div>
                </div>
                <div className="self-stretch h-[72px] box-border flex flex-row items-center justify-start py-4 px-6 border-b-[1px] border-solid border-gray-200">
                  <div className="relative text-sm leading-[20px] font-text-sm-semibold text-gray-600 text-left">
                    (229) 555-0109
                  </div>
                </div>
                <div className="self-stretch h-[72px] box-border flex flex-row items-center justify-start py-4 px-6 border-b-[1px] border-solid border-gray-200">
                  <div className="relative text-sm leading-[20px] font-text-sm-semibold text-gray-600 text-left">
                    (239) 555-0108
                  </div>
                </div>
                <div className="self-stretch h-[72px] box-border flex flex-row items-center justify-start py-4 px-6 border-b-[1px] border-solid border-gray-200">
                  <div className="relative text-sm leading-[20px] font-text-sm-semibold text-gray-600 text-left">
                    (684) 555-0102
                  </div>
                </div>
                <div className="self-stretch h-[72px] box-border flex flex-row items-center justify-start py-4 px-6 border-b-[1px] border-solid border-gray-200">
                  <div className="relative text-sm leading-[20px] font-text-sm-semibold text-gray-600 text-left">
                    (302) 555-0107
                  </div>
                </div>
                <div className="self-stretch h-[72px] box-border flex flex-row items-center justify-start py-4 px-6 border-b-[1px] border-solid border-gray-200">
                  <div className="relative text-sm leading-[20px] font-text-sm-semibold text-gray-600 text-left">
                    (201) 555-0124
                  </div>
                </div>
                <div className="self-stretch h-[72px] box-border flex flex-row items-center justify-start py-4 px-6 border-b-[1px] border-solid border-gray-200">
                  <div className="relative text-sm leading-[20px] font-text-sm-semibold text-gray-600 text-left">
                    (505) 555-0125
                  </div>
                </div>
                <div className="self-stretch box-border h-[72px] hidden flex-row items-center justify-start py-4 px-6 border-b-[1px] border-solid border-gray-200">
                  <div className="relative text-sm leading-[20px] font-text-sm-semibold text-gray-600 text-left">
                    QA Engineer
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start z-[12] mq1025:hidden">
                <button className="cursor-pointer [border:none] py-[17px] pr-[41px] pl-6 bg-gray-50 flex flex-row items-center justify-start border-b-[1px] border-solid border-gray-200">
                  <div className="flex flex-row items-center justify-start">
                    <div className="relative text-sm leading-[18px] font-medium font-text-sm-semibold text-gray-600 text-left">
                      Actions
                    </div>
                  </div>
                </button>
                <div className="flex flex-row items-center justify-start p-4 gap-[4px] border-b-[1px] border-solid border-gray-200">
                  <div className="rounded-lg overflow-hidden hidden flex-row items-center justify-center p-2.5">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden hidden flex-row items-center justify-center p-2.5">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden flex flex-row items-center justify-center p-2.5">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                      src="/eye.svg"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden flex flex-row items-center justify-center p-2.5">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                      src="/edit01.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start p-4 gap-[4px] border-b-[1px] border-solid border-gray-200">
                  <div className="rounded-lg overflow-hidden hidden flex-row items-center justify-center p-2.5">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden hidden flex-row items-center justify-center p-2.5">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden flex flex-row items-center justify-center p-2.5">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                      src="/eye-1.svg"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden flex flex-row items-center justify-center p-2.5">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                      src="/edit01.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start p-4 gap-[4px] border-b-[1px] border-solid border-gray-200">
                  <div className="rounded-lg overflow-hidden hidden flex-row items-center justify-center p-2.5">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden hidden flex-row items-center justify-center p-2.5">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden flex flex-row items-center justify-center p-2.5">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                      src="/eye-1.svg"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden flex flex-row items-center justify-center p-2.5">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                      src="/edit01.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start p-4 gap-[4px] border-b-[1px] border-solid border-gray-200">
                  <div className="rounded-lg overflow-hidden hidden flex-row items-center justify-center p-2.5">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden hidden flex-row items-center justify-center p-2.5">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden flex flex-row items-center justify-center p-2.5">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                      src="/eye-1.svg"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden flex flex-row items-center justify-center p-2.5">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                      src="/edit01.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start p-4 gap-[4px] border-b-[1px] border-solid border-gray-200">
                  <div className="rounded-lg overflow-hidden hidden flex-row items-center justify-center p-2.5">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden hidden flex-row items-center justify-center p-2.5">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden flex flex-row items-center justify-center p-2.5">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                      src="/eye-1.svg"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden flex flex-row items-center justify-center p-2.5">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                      src="/edit01.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start p-4 gap-[4px] border-b-[1px] border-solid border-gray-200">
                  <div className="rounded-lg overflow-hidden hidden flex-row items-center justify-center p-2.5">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden hidden flex-row items-center justify-center p-2.5">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden flex flex-row items-center justify-center p-2.5">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                      src="/eye-1.svg"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden flex flex-row items-center justify-center p-2.5">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                      src="/edit01.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start p-4 gap-[4px] border-b-[1px] border-solid border-gray-200">
                  <div className="rounded-lg overflow-hidden hidden flex-row items-center justify-center p-2.5">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden hidden flex-row items-center justify-center p-2.5">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden flex flex-row items-center justify-center p-2.5">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                      src="/eye-1.svg"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden flex flex-row items-center justify-center p-2.5">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                      src="/edit01.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start p-4 gap-[4px] border-b-[1px] border-solid border-gray-200">
                  <div className="rounded-lg overflow-hidden hidden flex-row items-center justify-center p-2.5">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden hidden flex-row items-center justify-center p-2.5">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden flex flex-row items-center justify-center p-2.5">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                      src="/eye-1.svg"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden flex flex-row items-center justify-center p-2.5">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                      src="/edit01.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start p-4 gap-[4px] border-b-[1px] border-solid border-gray-200">
                  <div className="rounded-lg overflow-hidden hidden flex-row items-center justify-center p-2.5">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden hidden flex-row items-center justify-center p-2.5">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden flex flex-row items-center justify-center p-2.5">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                      src="/eye-1.svg"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden flex flex-row items-center justify-center p-2.5">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                      src="/edit01.svg"
                    />
                  </div>
                </div>
                <div className="hidden flex-row items-center justify-start p-4 gap-[4px] border-b-[1px] border-solid border-gray-200">
                  <div className="rounded-lg overflow-hidden hidden flex-row items-center justify-center p-2.5">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden hidden flex-row items-center justify-center p-2.5">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden flex flex-row items-center justify-center p-2.5">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden flex flex-row items-center justify-center p-2.5">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch box-border flex flex-row items-center justify-between py-4 px-6 gap-[20px] max-w-full z-[13] border-t-[1px] border-solid border-gray-200 mq1025:flex-wrap">
              <div className="relative text-sm leading-[20px] font-medium font-text-sm-semibold text-gray-700 text-left">
                Showing members 1-9 (out of 100)
              </div>
              <div className="rounded-lg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border overflow-hidden flex flex-row items-start justify-start [row-gap:20px] max-w-full border-[1px] border-solid border-gray-300 mq750:flex-wrap">
                <button className="cursor-pointer [border:none] py-2.5 px-[15px] bg-base-white flex flex-row items-center justify-center gap-[8px] border-r-[1px] border-solid border-gray-300 hover:bg-gainsboro-100">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                    alt=""
                    src="/arrowleft.svg"
                  />
                  <div className="relative text-sm leading-[20px] font-semibold font-text-sm-semibold text-gray-700 text-left">
                    Previous
                  </div>
                </button>
                <div className="w-[40.5px] bg-gray-50 box-border flex flex-col items-center justify-center p-2.5 border-r-[1px] border-solid border-gray-300">
                  <div className="relative text-sm leading-[20px] font-semibold font-text-sm-semibold text-gray-800 text-left">
                    1
                  </div>
                </div>
                <div className="w-[40.5px] bg-base-white box-border flex flex-col items-center justify-center p-2.5 border-r-[1px] border-solid border-gray-300">
                  <div className="relative text-sm leading-[20px] font-semibold font-text-sm-semibold text-gray-700 text-left">
                    2
                  </div>
                </div>
                <div className="w-[40.5px] bg-base-white box-border flex flex-col items-center justify-center p-2.5 border-r-[1px] border-solid border-gray-300">
                  <div className="relative text-sm leading-[20px] font-semibold font-text-sm-semibold text-gray-700 text-left">
                    3
                  </div>
                </div>
                <div className="w-[40.5px] bg-base-white box-border flex flex-col items-center justify-center p-2.5 border-r-[1px] border-solid border-gray-300">
                  <div className="relative text-sm leading-[20px] font-semibold font-text-sm-semibold text-gray-700 text-left">
                    ...
                  </div>
                </div>
                <div className="w-[40.5px] bg-base-white box-border flex flex-col items-center justify-center p-2.5 border-r-[1px] border-solid border-gray-300">
                  <div className="relative text-sm leading-[20px] font-semibold font-text-sm-semibold text-gray-700 text-left">
                    8
                  </div>
                </div>
                <div className="w-[40.5px] bg-base-white box-border flex flex-col items-center justify-center p-2.5 border-r-[1px] border-solid border-gray-300">
                  <div className="relative text-sm leading-[20px] font-semibold font-text-sm-semibold text-gray-700 text-left">
                    9
                  </div>
                </div>
                <div className="w-[40.5px] bg-base-white box-border flex flex-col items-center justify-center p-2.5 border-r-[1px] border-solid border-gray-300">
                  <div className="relative text-sm leading-[20px] font-semibold font-text-sm-semibold text-gray-700 text-left">
                    10
                  </div>
                </div>
                <button className="cursor-pointer [border:none] py-2.5 px-[15px] bg-base-white w-[92.5px] box-border flex flex-row items-center justify-center gap-[8px] border-r-[1px] border-solid border-gray-300 hover:bg-gainsboro-100">
                  <div className="relative text-sm leading-[20px] font-semibold font-text-sm-semibold text-gray-700 text-left">
                    Next
                  </div>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                    alt=""
                    src="/arrowright.svg"
                  />
                </button>
              </div>
            </div>
          </section>
        </main>
      </form>
    );
  };
  
  export default MembersADMIN;
  