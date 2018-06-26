/**
 *
 * @Demo: Dashboard
 * @User: Longjun.Qu
 * @Date: 2018-06-13
 * @Time: 10:15
 *
 */


import React, {Component, Fragment} from 'react';

import Wrapper from 'components/_framework/Wrapper';
import Content from 'components/_framework/Content';
import Section from 'components/_framework/Section';
import SubHeader from 'components/_framework/SubHeader';

import Portlet from 'components/_portlet/Portlet';
import Button from "components/_button/Button";

import Demo from "components/_framework/Demo";

import 'sass/_demo.scss';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const _props = this.props;
        const {history} = _props;
        return (
            <Fragment>
                <Wrapper>
                    <SubHeader title="临时导航页"/>
                    <Content>
                        <div className="row">
                            <div className="col-xl-6">
                                <Portlet {...{
                                    header: 'Grid'
                                }} >
                                    <Demo>
                                        <Button {...{
                                            value: 'Grid',
                                            btnColor: 'outline-primary',
                                            _handle: {
                                                onClick: () => {
                                                    history.push('/Grid');
                                                }
                                            }

                                        }}/>
                                    </Demo>
                                </Portlet>
                                <Portlet {...{
                                    header: 'Base'
                                }} >
                                    <Section title="Base">
                                        <Demo>
                                            <Button {...{
                                                value: 'State Color',
                                                btnColor: 'outline-brand',
                                                _handle: {
                                                    onClick: () => {
                                                        history.push('/StateColor');
                                                    }
                                                }

                                            }}/>
                                            <Button {...{
                                                value: 'Typography',
                                                btnColor: 'outline-brand',
                                                _handle: {
                                                    onClick: () => {
                                                        history.push('/Typography');
                                                    }
                                                }
                                            }}/>
                                            <Button {...{
                                                value: 'Tables',
                                                btnColor: 'outline-brand',
                                                _handle: {
                                                    onClick: () => {
                                                        history.push('/Tables');
                                                    }
                                                }
                                            }}/>
                                            <Button {...{
                                                value: 'Progress',
                                                btnColor: 'outline-brand',
                                                _handle: {
                                                    onClick: () => {
                                                        history.push('/Progress');
                                                    }
                                                }
                                            }}/>
                                            <Button {...{
                                                value: 'Modal',
                                                btnColor: 'outline-brand',
                                                _handle: {
                                                    onClick: () => {
                                                        history.push('/Modal');
                                                    }
                                                }
                                            }}/>
                                            <Button {...{
                                                value: 'Alerts',
                                                btnColor: 'outline-brand',
                                                _handle: {
                                                    onClick: () => {
                                                        history.push('/Alerts');
                                                    }
                                                }
                                            }}/>
                                            <Button {...{
                                                value: 'Popover',
                                                btnColor: 'outline-brand',
                                                _handle: {
                                                    onClick: () => {
                                                        history.push('/Popover');
                                                    }
                                                }
                                            }}/>
                                            <Button {...{
                                                value: 'Tooltip',
                                                btnColor: 'outline-brand',
                                                _handle: {
                                                    onClick: () => {
                                                        history.push('/Tooltip');
                                                    }
                                                }
                                            }}/>
                                            <Button {...{
                                                value: 'BlockUI',
                                                btnColor: 'outline-brand',
                                                _handle: {
                                                    onClick: () => {
                                                        history.push('/BlockUI');
                                                    }
                                                }
                                            }}/>
                                            <Button {...{
                                                value: 'Scrollable',
                                                btnColor: 'outline-brand',
                                                _handle: {
                                                    onClick: () => {
                                                        history.push('/Scrollable');
                                                    }
                                                }
                                            }}/>
                                            <Button {...{
                                                value: 'Spinner',
                                                btnColor: 'outline-brand',
                                                _handle: {
                                                    onClick: () => {
                                                        history.push('/Spinner');
                                                    }
                                                }
                                            }}/>
                                            <Button {...{
                                                value: 'Navs',
                                                btnColor: 'outline-brand',
                                                _handle: {
                                                    onClick: () => {
                                                        history.push('/Navs');
                                                    }
                                                }
                                            }}/>
                                            <Button {...{
                                                value: 'SweetAlert2',
                                                btnColor: 'outline-brand',
                                                _handle: {
                                                    onClick: () => {
                                                        history.push('/SweetAlert2');
                                                    }
                                                }
                                            }}/>
                                        </Demo>
                                    </Section>
                                    <Section title="Tabs">
                                        <Demo>
                                            <Button {...{
                                                value: 'Bootstrap Tabs',
                                                btnColor: 'outline-info',
                                                _handle: {
                                                    onClick: () => {
                                                        history.push('/base/tabs/BootstrapTabs');
                                                    }
                                                }
                                            }}/>
                                            <Button {...{
                                                value: 'Line Tabs',
                                                btnColor: 'outline-info',
                                                _handle: {
                                                    onClick: () => {
                                                        history.push('/base/tabs/LineTabs');
                                                    }
                                                }
                                            }}/>
                                        </Demo>
                                    </Section>
                                </Portlet>
                            </div>
                            <div className="col-xl-6">
                                <Portlet {...{
                                    header: 'Button'
                                }} >
                                    <Section title="Button Base">
                                        <Demo>
                                            <Button {...{
                                                value: 'Default',
                                                btnColor: 'outline-focus',
                                                _handle: {
                                                    onClick: () => {
                                                        history.push('/buttons/base/default');
                                                    }
                                                }
                                            }}/>
                                            <Button {...{
                                                value: 'Square',
                                                btnColor: 'outline-focus',
                                                _handle: {
                                                    onClick: () => {
                                                        history.push('/buttons/base/square');
                                                    }
                                                }
                                            }}/>
                                            <Button {...{
                                                value: 'Pill',
                                                btnColor: 'outline-focus',
                                                _handle: {
                                                    onClick: () => {
                                                        history.push('/buttons/base/pill');
                                                    }
                                                }
                                            }}/>
                                            <Button {...{
                                                value: 'Air',
                                                btnColor: 'outline-focus',
                                                _handle: {
                                                    onClick: () => {
                                                        history.push('/buttons/base/air');
                                                    }
                                                }
                                            }}/>

                                        </Demo>
                                    </Section>
                                    <Section title="Button Group">
                                        <Demo>
                                            <Button {...{
                                                value: 'Button Group',
                                                btnColor: 'outline-success',
                                                _handle: {
                                                    onClick: () => {
                                                        history.push('/buttons/buttonGroup');
                                                    }
                                                }
                                            }}/>
                                        </Demo>
                                    </Section>
                                    <Section title="Button Dropdown">
                                        <Demo>
                                            <Button {...{
                                                value: 'Button Dropdown',
                                                btnColor: 'outline-danger',
                                                _handle: {
                                                    onClick: () => {
                                                        history.push('/buttons/ButtonDropdown');
                                                    }
                                                }
                                            }}/>
                                        </Demo>
                                    </Section>
                                    <Section title="Button Icon">
                                        <Demo>
                                            <Button {...{
                                                value: 'Lineawesome Icon',
                                                btnColor: 'outline-warning',
                                                _handle: {
                                                    onClick: () => {
                                                        history.push('/buttons/buttonIcon/LineawesomeIcon');
                                                    }
                                                }
                                            }}/>
                                            <Button {...{
                                                value: 'Fontawesome Icon',
                                                btnColor: 'outline-warning',
                                                _handle: {
                                                    onClick: () => {
                                                        history.push('/buttons/buttonIcon/FontawesomeIcon');
                                                    }
                                                }
                                            }}/>
                                            <Button {...{
                                                value: 'Flaticon Icon',
                                                btnColor: 'outline-warning',
                                                _handle: {
                                                    onClick: () => {
                                                        history.push('/buttons/buttonIcon/FlaticonIcon');
                                                    }
                                                }
                                            }}/>
                                        </Demo>
                                    </Section>
                                </Portlet>
                            </div>
                        </div>
                    </Content>
                </Wrapper>
            </Fragment>
        );
    }
}

export default Dashboard;