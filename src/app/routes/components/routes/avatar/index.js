import React from 'react';
import IconAvatars from './icon/IconAvatars';
import ImageAvatars from './image/ImageAvatars';
import LetterAvatars from './letter/LetterAvatars';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader'

const Avatars = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title="Avatars" match={match}/>

            <div className="row mb-lg-4">
                <CardBox styleName="col-lg-6" heading="Image Avatars">
                    <ImageAvatars/>
                </CardBox>

                <CardBox styleName="col-lg-6" heading="Letter Avatars">
                    <LetterAvatars/>
                </CardBox>
            </div>

            <div className="row">
                <CardBox styleName="col-lg-12" cardStyle="text-center" heading="Icon Avatars">
                    <IconAvatars/>
                </CardBox>
            </div>
        </div>
    );
};
export default Avatars;