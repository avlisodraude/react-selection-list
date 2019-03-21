const ComponentUtil = {
    toPrettyFieldName(esFieldName, prependLevel = true) {
        if (esFieldName) {
            //first split the field based on a dot
            const tmp = esFieldName.split('.');

            let isKeywordField = false;

            //if the last field is called raw or keyword (ES reserved names), drop it
            if (tmp[tmp.length - 1] === 'raw' || tmp[tmp.length - 1] === 'keyword') {
                isKeywordField = true;
                tmp.pop();
            }

            let leaf = tmp[tmp.length - 1];
            let parent = null;
            let metadataLayer = '';
            let prettyName = '';

            if (leaf.substring(0, 1) === '@') {
                leaf = leaf.substring(1) + '@';
            }

            //first determine the 'metadata layer', e.g. season, series, program or segment
            if (tmp[0].indexOf('bga:') === -1) {
                metadataLayer = 'program';
            } else {
                metadataLayer = tmp[0].substring(tmp[0].indexOf(':') + 1);
                tmp.splice(0, 1);
            }

            // move @ to end of fieldname
            if (tmp.length > 0) {
                parent = tmp[0].substring(tmp[0].indexOf(':') + 1);
            }

            //for lists prepend the level, for the FieldSelector don't
            prettyName = leaf;

            if (parent) {
                prettyName += ' (in: ' + parent + ')'
            }
            if (isKeywordField) {
                prettyName += ' *';
            }
            if (prependLevel) {
                prettyName += ' | ' + metadataLayer;
            }
            return prettyName.replace('bg:', '');
        }
        return esFieldName;
    }
};

export default ComponentUtil;




