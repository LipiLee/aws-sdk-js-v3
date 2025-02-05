import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { SearchProfilesRequest, SearchProfilesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1SearchProfilesCommand,
  serializeAws_json1_1SearchProfilesCommand,
} from "../protocols/Aws_json1_1";
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

export interface SearchProfilesCommandInput extends SearchProfilesRequest {}
export interface SearchProfilesCommandOutput extends SearchProfilesResponse, __MetadataBearer {}

/**
 * <p>Searches room profiles and lists the ones that meet a set of filter
 *          criteria.</p>
 */
export class SearchProfilesCommand extends $Command<
  SearchProfilesCommandInput,
  SearchProfilesCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SearchProfilesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchProfilesCommandInput, SearchProfilesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "SearchProfilesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SearchProfilesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SearchProfilesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SearchProfilesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SearchProfilesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchProfilesCommandOutput> {
    return deserializeAws_json1_1SearchProfilesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
