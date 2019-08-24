import React from 'react';
import style from './default-sections.scss';

const Interests = ({ interests }) =>
    interests.length > 0 && (
        <div className={style['resume-interests']}>
            <h3>Interests</h3>
            <ul className={style['resume-interests--interests']}>
                {interests.map((interest) => {
                    if (interest.enabled) {
                        const { name, keywords } = interest.value;
                        return (
                            <li>
                                {name && name.enabled && <p className={style['resume-interests--interest']}>
                                    {name.value}
                                </p>}
                                {keywords && keywords.enabled && (
                                    <ul className={style['resume-interests--keywords']}>
                                        {keywords.value.map((keyword) =>
                                            keyword && keyword.enabled && (
                                                <li>
                                                    {keyword.value}
                                                </li>
                                            ))}
                                    </ul>
                                )}
                            </li>
                        );
                    }

                    return null;
                })}
            </ul>
        </div>
    );

export default Interests;
