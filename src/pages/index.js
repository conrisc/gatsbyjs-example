import React from "react"

import Styles from './index.module.scss';
import { Layout } from '../components/Layout';
import { Title } from '../components/Title';

export default () => {
    return (
        <Layout>
            <Title>Hi there, this is the Home page ;)</Title>
            <div className={Styles.content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At erat pellentesque adipiscing commodo elit at imperdiet. At urna condimentum mattis pellentesque id nibh tortor id. Ullamcorper morbi tincidunt ornare massa eget. Pharetra convallis posuere morbi leo urna molestie at. Leo duis ut diam quam nulla porttitor massa id neque. Suspendisse ultrices gravida dictum fusce ut. Quis vel eros donec ac odio tempor orci. Nulla malesuada pellentesque elit eget gravida cum sociis natoque. Auctor elit sed vulputate mi sit amet. Habitant morbi tristique senectus et netus et malesuada fames ac. Id consectetur purus ut faucibus pulvinar elementum integer enim. Augue interdum velit euismod in pellentesque massa placerat duis. Fermentum leo vel orci porta non pulvinar. Odio tempor orci dapibus ultrices in iaculis. Morbi quis commodo odio aenean sed adipiscing diam donec. Et tortor consequat id porta nibh venenatis cras sed. Pellentesque diam volutpat commodo sed egestas egestas.

                Est ullamcorper eget nulla facilisi. Orci nulla pellentesque dignissim enim sit. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Massa vitae tortor condimentum lacinia quis vel eros donec. Aliquam id diam maecenas ultricies mi eget mauris pharetra. Vitae purus faucibus ornare suspendisse. Non diam phasellus vestibulum lorem sed. Scelerisque in dictum non consectetur. Eros donec ac odio tempor orci dapibus ultrices in. Ullamcorper a lacus vestibulum sed arcu non. Nulla facilisi morbi tempus iaculis urna id volutpat. Magna ac placerat vestibulum lectus mauris ultrices eros in cursus. Est ultricies integer quis auctor elit sed vulputate mi. Diam sollicitudin tempor id eu nisl. Faucibus et molestie ac feugiat sed lectus. Ut eu sem integer vitae justo eget. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Est velit egestas dui id ornare.
            </div>
        </Layout>
    )
}
