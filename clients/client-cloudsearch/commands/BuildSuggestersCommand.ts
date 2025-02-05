import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { BuildSuggestersRequest, BuildSuggestersResponse } from "../models/models_0";
import {
  deserializeAws_queryBuildSuggestersCommand,
  serializeAws_queryBuildSuggestersCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface BuildSuggestersCommandInput extends BuildSuggestersRequest {}
export interface BuildSuggestersCommandOutput extends BuildSuggestersResponse, __MetadataBearer {}

/**
 * <p>Indexes the search suggestions. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html#configuring-suggesters">Configuring Suggesters</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 */
export class BuildSuggestersCommand extends $Command<
  BuildSuggestersCommandInput,
  BuildSuggestersCommandOutput,
  CloudSearchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BuildSuggestersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BuildSuggestersCommandInput, BuildSuggestersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudSearchClient";
    const commandName = "BuildSuggestersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BuildSuggestersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BuildSuggestersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BuildSuggestersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryBuildSuggestersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BuildSuggestersCommandOutput> {
    return deserializeAws_queryBuildSuggestersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
