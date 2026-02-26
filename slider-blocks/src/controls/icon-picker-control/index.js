/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

/**
 * WordPress dependencies
 *
 */
import { __ } from '@wordpress/i18n';
import { BaseControl, Button, Modal } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { withInstanceId } from '@wordpress/compose';

/*
 * Import Icons
 */
import Icons from '../../helper/icons';

const IconPickerControl = ({ label, value, onChange, instanceId }) => {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState('');

    const id = `color-control-${instanceId}`;

    return (
        <div className="gkits-control-container icon-picker-control">
            <BaseControl id={id} label={label} />
            <div className="icon-placeplaceholder">
                {value ? (
                    <div className="selected-icon">{Icons[value]}</div>
                ) : (
                    <Button className="icon-selected" variant="secondary" onClick={() => setOpen(true)}>
                        {__('Select Icon', 'slider-blocks')}
                    </Button>
                )}
                {value && (
                    <Button className="replace-btn" onClick={() => setOpen(true)}>
                        {__('Replace', 'slider-blocks')}
                    </Button>
                )}
                {value && <Button className="remove-btn" onClick={() => onChange('')} icon="trash" />}
            </div>
            {open && (
                <Modal title={__('Select Icon', 'slider-blocks')} onRequestClose={() => setOpen(false)} isFullscreen={true}>
                    <div className="gkits-icons-modal">
                        <div className="icon-search">
                            <input
                                type="text"
                                placeholder={__('Search Icon', 'slider-blocks')}
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                            />
                        </div>
                        <div className="icon-list">
                            {search
                                ? // filter icons by search and run map function for Icons Object key
                                  Object.keys(Icons)
                                      .filter(icon => {
                                          return icon.includes(search);
                                      })
                                      .map((icon, index) => {
                                          return (
                                              <Button
                                                  key={index}
                                                  className={`icon-item ${value === icon ? 'active' : ''}`}
                                                  title={icon}
                                                  onClick={() => {
                                                      onChange(icon);
                                                      setOpen(false);
                                                  }}
                                              >
                                                  {Icons[icon]}
                                              </Button>
                                          );
                                      })
                                : // run map function for Icons Object key
                                  Object.keys(Icons).map((icon, index) => {
                                      return (
                                          <Button
                                              key={index}
                                              className={`icon-item ${value === icon ? 'active' : ''}`}
                                              title={icon}
                                              onClick={() => {
                                                  onChange(icon);
                                                  setOpen(false);
                                              }}
                                          >
                                              {Icons[icon]}
                                          </Button>
                                      );
                                  })}
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
};
export default withInstanceId(IconPickerControl);
